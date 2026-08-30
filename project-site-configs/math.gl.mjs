import {createRequire} from 'node:module';

import config from '../projects/math.gl/website/docusaurus.config.js';

const requireFromMathGl = createRequire(
  new URL('../projects/math.gl/website/docusaurus.config.js', import.meta.url)
);

function resolveModuleEntry(entry, aliases = {}) {
  if (typeof entry === 'string') {
    return requireFromMathGl.resolve(aliases[entry] ?? entry);
  }
  if (Array.isArray(entry) && typeof entry[0] === 'string') {
    return [requireFromMathGl.resolve(aliases[entry[0]] ?? entry[0]), ...entry.slice(1)];
  }
  return entry;
}

const mathGlConfig = {
  ...config,
  url: 'https://vis.gl',
  baseUrl: '/math.gl/',
  presets: config.presets.map(entry =>
    resolveModuleEntry(entry, {classic: '@docusaurus/preset-classic'})
  ),
  plugins: config.plugins.map(entry => resolveModuleEntry(entry)),
  themes: config.themes?.map(entry => resolveModuleEntry(entry))
};

export default mathGlConfig;
