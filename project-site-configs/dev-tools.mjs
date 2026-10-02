import {createRequire} from 'node:module';

import config from '../projects/dev-tools/website/docusaurus.config.js';

const requireFromDevTools = createRequire(
  new URL('../projects/dev-tools/website/docusaurus.config.js', import.meta.url)
);

function resolveModuleEntry(entry, aliases = {}) {
  if (typeof entry === 'string') {
    return requireFromDevTools.resolve(aliases[entry] ?? entry);
  }
  if (Array.isArray(entry) && typeof entry[0] === 'string') {
    return [requireFromDevTools.resolve(aliases[entry[0]] ?? entry[0]), ...entry.slice(1)];
  }
  return entry;
}

const devToolsConfig = {
  ...config,
  url: 'https://vis.gl',
  baseUrl: '/dev-tools/',
  presets: config.presets.map(entry =>
    resolveModuleEntry(entry, {classic: '@docusaurus/preset-classic'})
  ),
  plugins: config.plugins.map(entry => resolveModuleEntry(entry)),
  themes: config.themes?.map(entry => resolveModuleEntry(entry))
};

export default devToolsConfig;
