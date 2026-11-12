// Reviewed data roots used by vis.gl examples. Never allow an entire host or repo.
// Directory rules end in '/' so similarly named siblings cannot match.
const deckData = ['examples/', 'website/', 'formats/', '3d-tiles/', 'luma.gl/examples/'];
export const upstreamRepositories = {
  'visgl/deck.gl-data': deckData,
  'uber-common/deck.gl-data': deckData,
  'visgl/react-map-gl': ['examples/.data/'],
  'uber/react-map-gl': ['examples/.data/'],
  'visgl/deck.gl-community': [
    'examples/layers/skybox-assets/',
    'modules/graph-layers/test/data/__fixtures__/dot/'
  ],
  'visgl/luma.gl': ['examples/api/cubemap/']
};

export function isApprovedDataPath(url) {
  // Reject encoded separators, double encoding and ambiguous paths rather than
  // relying on GitHub and the edge runtime to normalize them identically.
  if (/%|\\|[\u0000-\u0020\u007f]/.test(url.pathname)) return false;
  const [, owner, repo, ...segments] = url.pathname.split('/');
  const roots = upstreamRepositories[`${owner}/${repo}`];
  if (!roots) return false;
  // Only the reviewed branch, including GitHub's explicit branch spelling.
  if (segments.slice(0, 3).join('/') === 'refs/heads/master') segments.splice(0, 3);
  else if (segments[0] === 'master') segments.shift();
  else return false;
  if (segments.some(segment => !segment || segment === '.' || segment === '..')) return false;
  const path = segments.join('/');
  return roots.some(root => path.startsWith(root) && path.length > root.length);
}
