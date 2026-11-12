import {test} from 'node:test';
import assert from 'node:assert/strict';
import {proxy, origins} from '../netlify/edge-functions/lib/proxy.mjs';

const url =
  'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-stations.json';
const req = (headers = {}, method = 'GET', target = url) =>
  new Request(`https://vis.gl/api/proxy?url=${encodeURIComponent(target)}`, {
    method,
    headers: {origin: 'https://vis.gl', ...headers}
  });
const ok = async () => new Response('hello');

test('exact origins, GitHub Pages and URL restrictions', async () => {
  for (const origin of origins)
    assert.equal(
      (await proxy(req({origin}), {fetcher: ok})).headers.get('access-control-allow-origin'),
      origin
    );
  for (const origin of ['null', 'https://other.github.io', 'https://vis.gl.attacker.com'])
    assert.equal((await proxy(req({origin}))).status, 403);
  for (const target of [
    'http://raw.githubusercontent.com/a',
    'https://raw.githubusercontent.com.evil.test/a',
    'https://u:p@raw.githubusercontent.com/a',
    'https://raw.githubusercontent.com:444/a',
    'https://127.0.0.1/a'
  ])
    assert.equal((await proxy(req({}, 'GET', target))).status, 400);
  assert.equal(
    (
      await proxy(
        new Request('https://vis.gl/api/proxy?url=a&url=b', {headers: {origin: 'https://vis.gl'}})
      )
    ).status,
    400
  );
  const same = req();
  same.headers.delete('origin');
  assert.equal((await proxy(same)).status, 403);
  same.headers.set('sec-fetch-site', 'same-origin');
  assert.equal((await proxy(same, {fetcher: ok})).status, 200);
});

test('preflight, methods and kill switch', async () => {
  assert.equal((await proxy(req({}, 'POST'))).status, 405);
  assert.equal((await proxy(req(), {disabled: true})).status, 503);
  const r = await proxy(
    req(
      {'access-control-request-method': 'GET', 'access-control-request-headers': 'Range, If-Range'},
      'OPTIONS'
    )
  );
  assert.equal(r.status, 204);
  assert.equal(r.headers.get('access-control-max-age'), '600');
  assert.equal(
    (
      await proxy(
        req(
          {
            'access-control-request-method': 'GET',
            'access-control-request-headers': 'Authorization'
          },
          'OPTIONS'
        )
      )
    ).status,
    403
  );
});

test('header filtering and HTTP status preservation', async () => {
  for (const status of [200, 206, 304, 404, 416, 429]) {
    const r = await proxy(req({range: 'bytes=0-1', cookie: 'private', authorization: 'secret'}), {
      fetcher: async (_url, init) => {
        assert.equal(init.headers.get('range'), 'bytes=0-1');
        assert.equal(init.headers.get('cookie'), null);
        assert.equal(init.headers.get('authorization'), null);
        return new Response(status === 304 ? null : new Uint8Array([0, 255]), {
          status,
          headers: {
            'content-range': 'bytes 0-1/2',
            etag: 'tag',
            'set-cookie': 'secret',
            connection: 'retry-after',
            'retry-after': '10',
            'content-length': '2',
            'access-control-allow-origin': '*'
          }
        });
      }
    });
    assert.equal(r.status, status);
    assert.equal(r.headers.get('set-cookie'), null);
    assert.equal(r.headers.get('retry-after'), null);
    assert.equal(r.headers.get('content-length'), null);
    assert.equal(r.headers.get('access-control-allow-origin'), 'https://vis.gl');
    if (status !== 304)
      assert.deepEqual(new Uint8Array(await r.arrayBuffer()), new Uint8Array([0, 255]));
  }
  assert.equal((await proxy(req({}, 'HEAD'), {fetcher: ok})).body, null);
});

test('redirect destinations, loops and network timeout', async () => {
  assert.equal(
    (
      await proxy(req(), {
        fetcher: async () =>
          new Response(null, {status: 302, headers: {location: 'https://127.0.0.1/'}})
      })
    ).status,
    502
  );
  let count = 0;
  assert.equal(
    (
      await proxy(req(), {
        fetcher: async () => {
          count++;
          return new Response(null, {status: 302, headers: {location: url}});
        }
      })
    ).status,
    502
  );
  assert.equal(count, 4);
  assert.equal(
    (
      await proxy(req(), {
        fetcher: async () => {
          throw Error();
        }
      })
    ).status,
    502
  );
  const r = await proxy(req(), {
    timeoutMs: 5,
    fetcher: (_url, {signal}) =>
      new Promise((resolve, reject) => signal.addEventListener('abort', () => reject(Error())))
  });
  assert.equal(r.status, 504);
});

test('stream is lazy, incremental and cancellable', async () => {
  let pulls = 0;
  let cancelled = false;
  const source = new ReadableStream(
    {
      pull(c) {
        pulls++;
        c.enqueue(new Uint8Array(65536));
      },
      cancel() {
        cancelled = true;
      }
    },
    {highWaterMark: 0}
  );
  const r = await proxy(req(), {fetcher: async () => new Response(source)});
  assert.equal(pulls, 0);
  const reader = r.body.getReader();
  for (let i = 0; i < 100; i++) await reader.read();
  assert.equal(pulls, 100);
  await reader.cancel();
  assert.equal(cancelled, true);
});

test('allowed redirects and compression metadata', async () => {
  let calls = 0;
  const result = await proxy(req(), {
    fetcher: async target => {
      if (calls++ === 0)
        return new Response(null, {
          status: 302,
          headers: {location: '/visgl/deck.gl-data/master/website/bart-stations.json'}
        });
      assert.equal(target.href, url);
      return new Response('decoded', {
        headers: {'content-encoding': 'gzip', 'content-length': '123', etag: 'encoded-validator'}
      });
    }
  });
  assert.equal(await result.text(), 'decoded');
  for (const header of ['content-length', 'content-encoding', 'etag'])
    assert.equal(result.headers.get(header), null);
  assert.equal(
    (
      await proxy(req(), {
        fetcher: async () =>
          new Response('encoded range', {status: 206, headers: {'content-encoding': 'gzip'}})
      })
    ).status,
    502
  );
});

test('request abort reaches upstream and header timeout ends before streaming', async () => {
  const controller = new AbortController();
  const request = new Request(req(), {signal: controller.signal});
  let signal;
  const result = await proxy(request, {
    timeoutMs: 5,
    fetcher: async (_url, init) => {
      signal = init.signal;
      return new Response(
        new ReadableStream(
          {
            async pull(target) {
              await new Promise(resolve => setTimeout(resolve, 20));
              target.enqueue(new Uint8Array([1]));
            }
          },
          {highWaterMark: 0}
        )
      );
    }
  });
  const reader = result.body.getReader();
  assert.deepEqual((await reader.read()).value, new Uint8Array([1]));
  assert.equal(signal.aborted, false);
  controller.abort();
  assert.equal(signal.aborted, true);
  await reader.cancel();
});

test('midstream failures terminate the stream', async () => {
  const result = await proxy(req(), {
    fetcher: async () =>
      new Response(
        new ReadableStream(
          {
            pull(target) {
              target.error(new Error('Disconnected'));
            }
          },
          {highWaterMark: 0}
        )
      )
  });
  assert.equal(result.status, 200);
  await assert.rejects(result.text(), /Disconnected/);
});

test('only reviewed repositories, refs and data directories can be fetched', async () => {
  const approved = [
    'visgl/deck.gl-data/master/examples/arc/counties.json',
    'visgl/deck.gl-data/refs/heads/master/website/bart-stations.json',
    'visgl/deck.gl-data/master/formats/geoparquet/countries/countries_zstd.parquet',
    'visgl/deck.gl-data/master/3d-tiles/RoyalExhibitionBuilding/tileset.json',
    'uber-common/deck.gl-data/master/luma.gl/examples/gltf/papermill/specular/a.jpg',
    'visgl/react-map-gl/master/examples/.data/feature-example-sf.json',
    'uber/react-map-gl/master/examples/.data/us-income.geojson',
    'visgl/deck.gl-community/master/examples/layers/skybox-assets/tycho-negx.jpg',
    'visgl/deck.gl-community/refs/heads/master/modules/graph-layers/test/data/__fixtures__/dot/karate.dot',
    'visgl/luma.gl/master/examples/api/cubemap/sky-posx.png'
  ];
  for (const path of approved) {
    const response = await proxy(req({}, 'GET', `https://raw.githubusercontent.com/${path}`), {
      fetcher: ok
    });
    assert.equal(response.status, 200, path);
    await response.body.cancel();
  }
  for (const path of [
    'someone/deck.gl-data/master/examples/data.json',
    'visgl/deck.gl-data-fork/master/examples/data.json',
    'visgl/deck.gl-data/master/README.md',
    'visgl/deck.gl-data/main/examples/data.json',
    'visgl/deck.gl-data/refs/tags/master/examples/data.json',
    'visgl/deck.gl-data/master/examples-private/data.json',
    'visgl/deck.gl-data/master/examples/',
    'visgl/deck.gl-data/master/examples/../README.md',
    'visgl/deck.gl-data/master/examples/%2e%2e/README.md',
    'visgl/deck.gl-data/master/examples/%252e%252e/README.md',
    'visgl/deck.gl-data/master/examples/a%2fb.json',
    'visgl/deck.gl-data/master/examples/a%5cb.json',
    'visgl/deck.gl-data/master/examples//data.json',
    'visgl/react-map-gl/master/src/index.ts',
    'visgl/luma.gl/master/examples/api/cubemap-other/data.png'
  ]) {
    let fetched = false;
    const response = await proxy(req({}, 'GET', `https://raw.githubusercontent.com/${path}`), {
      fetcher: async () => {
        fetched = true;
        return ok();
      }
    });
    assert.equal(response.status, 400, path);
    assert.equal(fetched, false, path);
  }
});

test('redirects cannot escape approved data roots on the same host', async () => {
  for (const location of [
    '/visgl/deck.gl-data/master/README.md',
    '/someone/data/master/examples/file.json',
    '../README.md',
    '/visgl/deck.gl-data/main/website/bart-stations.json'
  ]) {
    let calls = 0;
    const response = await proxy(req(), {
      fetcher: async () => {
        calls++;
        return new Response(null, {status: 302, headers: {location}});
      }
    });
    assert.equal(response.status, 502, location);
    assert.equal(calls, 1, location);
  }
});
