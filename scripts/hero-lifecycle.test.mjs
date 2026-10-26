import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createRequire} from 'node:module';
import vm from 'node:vm';
import test from 'node:test';

const require = createRequire(import.meta.url);
const ts = require('typescript');
const source = await readFile(new URL('../components/hero.js', import.meta.url), 'utf8');

function deferred() {
  let resolve;
  const promise = new Promise(done => { resolve = done; });
  return {promise, resolve};
}

function makeHero(createLoop) {
  const warnings = [];
  const compiled = ts.transpileModule(source, {
    compilerOptions: {jsx: ts.JsxEmit.React, module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true}
  }).outputText;
  const context = vm.createContext({
    exports: {},
    require: name => name === 'react' ? {Component: class {}, createRef: () => ({current: {}})} : {},
    console: {warn: (...args) => warnings.push(args)}
  });
  vm.runInContext(compiled, context);
  context.makeTestLoop = createLoop;
  vm.runInContext('createAnimationLoop = makeTestLoop;', context);
  return {hero: new context.exports.default(), warnings};
}

function makeLoop() {
  const started = deferred();
  const entered = deferred();
  return {started, entered, starts: 0, stops: 0, destroys: 0,
    start() { this.starts++; entered.resolve(); return started.promise; },
    stop() { this.stops++; },
    destroy() { this.destroys++; }
  };
}

test('unmount waits for an in-flight animation start before destroying resources', async () => {
  const loop = makeLoop();
  const {hero, warnings} = makeHero(async () => loop);
  const starting = hero._animationStart();
  await loop.entered.promise;
  assert.equal(loop.starts, 1);
  hero.componentWillUnmount();
  assert.equal(loop.destroys, 0);
  assert.equal(hero._visible, false);
  loop.started.resolve();
  await starting;
  assert.equal(loop.destroys, 1);
  assert.equal(hero._animationLoop, null);
  assert.equal(warnings.length, 0);
});

test('unmount during device creation disposes the result without starting it', async () => {
  const created = deferred();
  const loop = makeLoop();
  const {hero} = makeHero(() => created.promise);
  const starting = hero._animationStart();
  hero.componentWillUnmount();
  created.resolve(loop);
  await starting;
  assert.equal(loop.starts, 0);
  assert.equal(loop.destroys, 1);
});

test('visibility changes during startup honor the final visibility', async () => {
  for (const visible of [false, true]) {
    const loop = makeLoop();
    const {hero} = makeHero(async () => loop);
    const starting = hero._animationStart();
    await loop.entered.promise;
    hero._animationStop();
    if (visible) await hero._animationStart();
    assert.equal(loop.stops, 0);
    loop.started.resolve();
    await starting;
    assert.equal(loop.starts, 1);
    assert.equal(loop.stops, visible ? 0 : 1);
    hero.componentWillUnmount();
    assert.equal(loop.destroys, 1);
  }
});
