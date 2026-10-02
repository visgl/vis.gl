import {createRequire} from 'node:module';

import createConfig from '../projects/react-google-maps/website/docusaurus.config.js';

// The upstream examples require this variable at compile time. Keep the mirrored docs build
// self-contained while allowing deployments to provide a real key for interactive examples.
process.env.GOOGLE_MAPS_API_KEY ??= 'build-placeholder';

const requireFromReactGoogleMaps = createRequire(
  new URL('../projects/react-google-maps/website/docusaurus.config.js', import.meta.url)
);

function resolveModuleEntry(entry, aliases = {}) {
  if (typeof entry === 'string') {
    return requireFromReactGoogleMaps.resolve(aliases[entry] ?? entry);
  }
  if (Array.isArray(entry) && typeof entry[0] === 'string') {
    return [
      requireFromReactGoogleMaps.resolve(aliases[entry[0]] ?? entry[0]),
      ...entry.slice(1)
    ];
  }
  return entry;
}

export default async function reactGoogleMapsConfig() {
  const config = await createConfig();
  return {
    ...config,
    url: 'https://vis.gl',
    baseUrl: '/react-google-maps/',
    presets: config.presets.map(entry =>
      resolveModuleEntry(entry, {classic: '@docusaurus/preset-classic'})
    ),
    plugins: config.plugins.map(entry => resolveModuleEntry(entry)),
    themes: config.themes?.map(entry => resolveModuleEntry(entry))
  };
}
