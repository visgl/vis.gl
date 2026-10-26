import {createRequire} from 'node:module';

import config from '../projects/mjolnir.js/website/docusaurus.config.js';

const requireFromMjolnirJs = createRequire(
  new URL('../projects/mjolnir.js/website/docusaurus.config.js', import.meta.url)
);

function resolveModuleEntry(entry, aliases = {}) {
  if (typeof entry === 'string') {
    return requireFromMjolnirJs.resolve(aliases[entry] ?? entry);
  }
  if (Array.isArray(entry) && typeof entry[0] === 'string') {
    return [requireFromMjolnirJs.resolve(aliases[entry[0]] ?? entry[0]), ...entry.slice(1)];
  }
  return entry;
}

const mjolnirJsConfig = {
  ...config,
  url: 'https://vis.gl',
  baseUrl: '/mjolnir.js/',
  presets: config.presets.map(entry =>
    resolveModuleEntry(entry, {classic: '@docusaurus/preset-classic'})
  ),
  plugins: config.plugins.map(entry => resolveModuleEntry(entry)),
  themes: config.themes?.map(entry => resolveModuleEntry(entry))
};

export default mjolnirJsConfig;
