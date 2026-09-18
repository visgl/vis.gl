import {createRequire} from 'node:module';

import config from '../projects/react-map-gl/website/docusaurus.config.js';

const requireFromReactMapGl = createRequire(
  new URL('../projects/react-map-gl/website/docusaurus.config.js', import.meta.url)
);

function resolveModuleEntry(entry, aliases = {}) {
  if (typeof entry === 'string') {
    return requireFromReactMapGl.resolve(aliases[entry] ?? entry);
  }
  if (Array.isArray(entry) && typeof entry[0] === 'string') {
    return [requireFromReactMapGl.resolve(aliases[entry[0]] ?? entry[0]), ...entry.slice(1)];
  }
  return entry;
}

const reactMapGlConfig = {
  ...config,
  url: 'https://vis.gl',
  baseUrl: '/react-map-gl/',
  presets: config.presets.map(entry =>
    resolveModuleEntry(entry, {classic: '@docusaurus/preset-classic'})
  ),
  plugins: config.plugins.map(entry => resolveModuleEntry(entry)),
  themes: config.themes?.map(entry => resolveModuleEntry(entry))
};

export default reactMapGlConfig;
