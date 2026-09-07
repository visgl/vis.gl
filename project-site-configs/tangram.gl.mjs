import {createRequire} from 'node:module';

import config from '../projects/tangram.gl/website/docusaurus.config.js';

const requireFromTangram = createRequire(
  new URL('../projects/tangram.gl/website/docusaurus.config.js', import.meta.url)
);

function resolveModuleEntry(entry, aliases = {}) {
  if (typeof entry === 'string') {
    return requireFromTangram.resolve(aliases[entry] ?? entry);
  }
  if (Array.isArray(entry) && typeof entry[0] === 'string') {
    return [requireFromTangram.resolve(aliases[entry[0]] ?? entry[0]), ...entry.slice(1)];
  }
  return entry;
}

const tangramConfig = {
  ...config,
  url: 'https://vis.gl',
  baseUrl: '/tangram.gl/',
  presets: config.presets.map(entry =>
    resolveModuleEntry(entry, {classic: '@docusaurus/preset-classic'})
  ),
  plugins: config.plugins.map(entry => resolveModuleEntry(entry)),
  themes: config.themes?.map(entry => resolveModuleEntry(entry))
};

export default tangramConfig;
