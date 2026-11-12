import {isApprovedDataPath} from './upstreams.mjs';

export const origins = new Set([
  'https://vis.gl',
  'https://visgl.github.io',
  'https://deck.gl',
  'https://loaders.gl',
  'https://luma.gl',
  'https://math.gl',
  'https://probe.gl',
  'https://tangram.gl'
]);
export const upstreamHosts = new Set(['raw.githubusercontent.com']);
const requestHeaders = ['accept', 'range', 'if-range', 'if-none-match', 'if-modified-since'];
const responseHeaders = [
  'content-type',
  'content-range',
  'accept-ranges',
  'etag',
  'last-modified',
  'cache-control',
  'expires',
  'vary',
  'retry-after'
];
const exposed =
  'Content-Length, Content-Range, Accept-Ranges, ETag, Last-Modified, Cache-Control, Content-Type, Content-Encoding, Retry-After';

function upstream(value) {
  const url = new URL(value);
  if (
    url.protocol !== 'https:' ||
    url.username ||
    url.password ||
    url.port ||
    !upstreamHosts.has(url.hostname) ||
    !isApprovedDataPath(url)
  )
    throw new Error('Invalid upstream');
  url.hash = '';
  return url;
}

export async function proxy(
  request,
  {fetcher = fetch, disabled = false, timeoutMs = 25000, log = () => {}} = {}
) {
  const origin = request.headers.get('origin');
  const allowed = origin
    ? origins.has(origin)
    : request.headers.get('sec-fetch-site') === 'same-origin';
  const headers = new Headers({
    vary: 'Origin',
    'x-content-type-options': 'nosniff',
    'content-security-policy': "sandbox; default-src 'none'",
    'content-disposition': 'attachment',
    'netlify-cdn-cache-control': 'no-store',
    'cdn-cache-control': 'no-store'
  });
  if (allowed && origin) headers.set('access-control-allow-origin', origin);
  if (allowed) headers.set('access-control-expose-headers', exposed);
  const error = (status, message) => {
    const h = new Headers(headers);
    h.set('cache-control', 'no-store');
    h.set('content-type', 'application/json');
    return new Response(request.method === 'HEAD' ? null : JSON.stringify({error: message}), {
      status,
      headers: h
    });
  };
  if (!allowed) return error(403, 'Origin not allowed');
  if (disabled) return error(503, 'Proxy disabled');
  if (!['GET', 'HEAD', 'OPTIONS'].includes(request.method)) {
    headers.set('allow', 'GET, HEAD, OPTIONS');
    return error(405, 'Method not allowed');
  }
  let url;
  try {
    const values = new URL(request.url).searchParams.getAll('url');
    if (values.length !== 1) throw new Error();
    url = upstream(values[0]);
  } catch {
    return error(400, 'Invalid upstream URL');
  }
  if (request.method === 'OPTIONS') {
    const method = request.headers.get('access-control-request-method');
    const requested = (request.headers.get('access-control-request-headers') || '')
      .split(',')
      .map(s => s.trim().toLowerCase())
      .filter(Boolean);
    if (
      !origin ||
      !['GET', 'HEAD'].includes(method) ||
      requested.some(h => !requestHeaders.includes(h))
    )
      return error(403, 'Preflight not allowed');
    headers.set('access-control-allow-methods', 'GET, HEAD, OPTIONS');
    headers.set('access-control-allow-headers', requestHeaders.join(', '));
    headers.set('access-control-max-age', '600');
    headers.set('cache-control', 'no-store');
    return new Response(null, {status: 204, headers});
  }
  const forwarded = new Headers({'accept-encoding': 'identity'});
  for (const name of requestHeaders)
    if (request.headers.has(name)) forwarded.set(name, request.headers.get(name));
  const controller = new AbortController();
  const abort = () => controller.abort(request.signal.reason);
  request.signal.addEventListener('abort', abort, {once: true});
  if (request.signal.aborted) abort();
  const start = performance.now();
  let timedOut = false;
  const timer = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, timeoutMs);
  const cleanup = () => request.signal.removeEventListener('abort', abort);
  try {
    let response;
    for (let redirects = 0; ; redirects++) {
      response = await fetcher(url, {
        method: request.method,
        headers: forwarded,
        redirect: 'manual',
        signal: controller.signal
      });
      if (![301, 302, 303, 307, 308].includes(response.status)) break;
      await response.body?.cancel();
      if (redirects === 3 || !response.headers.has('location')) throw new Error('Redirect limit');
      url = upstream(new URL(response.headers.get('location'), url).href);
    }
    clearTimeout(timer);
    const blocked = new Set(
      (response.headers.get('connection') || '')
        .toLowerCase()
        .split(',')
        .map(x => x.trim())
    );
    for (const name of responseHeaders)
      if (!blocked.has(name) && response.headers.has(name))
        headers.set(name, response.headers.get(name));
    headers.set(
      'vary',
      [
        ...new Set(
          (headers.get('vary') || '')
            .split(',')
            .map(x => x.trim())
            .filter(Boolean)
            .concat('Origin')
        )
      ].join(', ')
    );
    // Fetch runtimes may decompress responses. Never copy length/encoding metadata.
    const encoding = response.headers.get('content-encoding');
    if (encoding && encoding !== 'identity') {
      headers.delete('etag');
      if (response.status === 206) {
        await response.body?.cancel();
        cleanup();
        return error(502, 'Encoded range response unsupported');
      }
    }
    log({
      host: url.hostname,
      status: response.status,
      headerMs: Math.round(performance.now() - start)
    });
    if (request.method === 'HEAD' || [204, 205, 304].includes(response.status) || !response.body) {
      await response.body?.cancel();
      cleanup();
      return new Response(null, {status: response.status, headers});
    }
    const reader = response.body.getReader();
    const body = new ReadableStream(
      {
        async pull(target) {
          try {
            const {done, value} = await reader.read();
            if (done) {
              cleanup();
              target.close();
            } else target.enqueue(value);
          } catch (e) {
            cleanup();
            target.error(e);
          }
        },
        async cancel(reason) {
          controller.abort(reason);
          cleanup();
          await reader.cancel(reason);
        }
      },
      {highWaterMark: 0}
    );
    return new Response(body, {status: response.status, headers});
  } catch {
    cleanup();
    log({
      host: url.hostname,
      status: timedOut ? 504 : 502,
      category: timedOut ? 'timeout' : 'upstream'
    });
    return error(timedOut ? 504 : 502, timedOut ? 'Upstream timed out' : 'Upstream request failed');
  } finally {
    clearTimeout(timer);
  }
}
