import assert from 'node:assert/strict';
import {mkdir, mkdtemp, readFile, rm, writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import test from 'node:test';

import {assembleProjectSites} from './assemble-project-sites.mjs';

async function createFixture(t) {
  const rootDirectory = await mkdtemp(path.join(tmpdir(), 'visgl-project-sites-'));
  t.after(() => rm(rootDirectory, {recursive: true, force: true}));
  await mkdir(path.join(rootDirectory, 'out'));
  await mkdir(path.join(rootDirectory, 'project-build', 'assets'), {recursive: true});
  await writeFile(path.join(rootDirectory, 'project-build', 'index.html'), '<h1>math.gl</h1>');
  await writeFile(path.join(rootDirectory, 'project-build', 'assets', 'site.css'), 'body {}');
  return rootDirectory;
}

test('copies a static project site into its mount path', async t => {
  const rootDirectory = await createFixture(t);

  await assembleProjectSites({
    rootDirectory,
    sites: [{name: 'math.gl', mountPath: '/math', source: 'project-build'}]
  });

  assert.equal(
    await readFile(path.join(rootDirectory, 'out', 'math', 'index.html'), 'utf8'),
    '<h1>math.gl</h1>'
  );
  assert.equal(
    await readFile(path.join(rootDirectory, 'out', 'math', 'assets', 'site.css'), 'utf8'),
    'body {}'
  );
});

test('runs a configured project build before copying its output', async t => {
  const rootDirectory = await createFixture(t);
  await writeFile(
    path.join(rootDirectory, 'build-project.mjs'),
    `import {mkdirSync, writeFileSync} from 'node:fs';
mkdirSync('generated-site');
writeFileSync('generated-site/index.html', '<h1>generated</h1>');`
  );

  await assembleProjectSites({
    rootDirectory,
    sites: [
      {
        name: 'generated',
        mountPath: '/generated',
        source: 'generated-site',
        build: {
          cwd: '.',
          command: process.execPath,
          args: ['build-project.mjs']
        }
      }
    ]
  });

  assert.equal(
    await readFile(path.join(rootDirectory, 'out', 'generated', 'index.html'), 'utf8'),
    '<h1>generated</h1>'
  );
});

test('runs project build steps in order', async t => {
  const rootDirectory = await createFixture(t);
  await writeFile(
    path.join(rootDirectory, 'prepare-project.mjs'),
    `import {writeFileSync} from 'node:fs';
writeFileSync('prepared.txt', 'ready');`
  );
  await writeFile(
    path.join(rootDirectory, 'build-prepared-project.mjs'),
    `import {mkdirSync, readFileSync, writeFileSync} from 'node:fs';
const prepared = readFileSync('prepared.txt', 'utf8');
mkdirSync('generated-site');
writeFileSync('generated-site/index.html', \`<h1>\${prepared}</h1>\`);`
  );

  await assembleProjectSites({
    rootDirectory,
    sites: [
      {
        name: 'generated',
        mountPath: '/generated',
        source: 'generated-site',
        build: [
          {command: process.execPath, args: ['prepare-project.mjs']},
          {command: process.execPath, args: ['build-prepared-project.mjs']}
        ]
      }
    ]
  });

  assert.equal(
    await readFile(path.join(rootDirectory, 'out', 'generated', 'index.html'), 'utf8'),
    '<h1>ready</h1>'
  );
});

test('rejects mount paths that escape the static output', async t => {
  const rootDirectory = await createFixture(t);

  await assert.rejects(
    assembleProjectSites({
      rootDirectory,
      sites: [{name: 'unsafe', mountPath: '/../outside', source: 'project-build'}]
    }),
    /Invalid project site mount path/
  );
});

test('rejects duplicate mount paths', async t => {
  const rootDirectory = await createFixture(t);

  await assert.rejects(
    assembleProjectSites({
      rootDirectory,
      sites: [
        {name: 'one', mountPath: '/math', source: 'project-build'},
        {name: 'two', mountPath: '/math', source: 'project-build'}
      ]
    }),
    /Duplicate project site mount path/
  );
});
