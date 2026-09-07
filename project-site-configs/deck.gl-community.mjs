import {createRequire} from 'node:module';

import config from '../projects/deck.gl-community/website/docusaurus.config.js';

const requireFromDeckGlCommunity = createRequire(
  new URL('../projects/deck.gl-community/website/docusaurus.config.js', import.meta.url)
);

function resolveModuleEntry(entry, aliases = {}) {
  if (typeof entry === 'string') {
    return requireFromDeckGlCommunity.resolve(aliases[entry] ?? entry);
  }
  if (Array.isArray(entry) && typeof entry[0] === 'string') {
    return [
      requireFromDeckGlCommunity.resolve(aliases[entry[0]] ?? entry[0]),
      ...entry.slice(1)
    ];
  }
  return entry;
}

const deckGlCommunityConfig = {
  ...config,
  url: 'https://vis.gl',
  baseUrl: '/deck.gl-community/',
  presets: config.presets.map(entry =>
    resolveModuleEntry(entry, {classic: '@docusaurus/preset-classic'})
  ),
  plugins: config.plugins.map(entry => resolveModuleEntry(entry)),
  themes: config.themes?.map(entry => resolveModuleEntry(entry))
};

export default deckGlCommunityConfig;
