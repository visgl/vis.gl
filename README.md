# vis.gl

This repository contains the [vis.gl](https://vis.gl) website. It is a statically exported
Docusaurus 3.10 site deployed by Netlify.

The existing framework catalog, showcases, news, blog, and project history are retained here.
[Open Visualization](https://www.openvisualization.org/) provides the broader collaboration
space's current community, governance, and event information.

## Development

Use Node.js 24.14.0 or later and Yarn 4:

```bash
yarn install --immutable
yarn dev
```

Open <http://localhost:3000>. Run the complete validation suite with:

```bash
yarn check
```

## Static deployment

`yarn build` exports the main website to `out/`. Netlify publishes that directory whenever the
default branch is updated.

### Project documentation

The static export can also host documentation built by another vis.gl project. Entries in
`project-sites.json` may optionally build a project, then copy its static output into a path under
`out/`.

math.gl, probe.gl, deck.gl-community, and tangram.gl are included as pinned Git submodules under `projects/`.
Each project installs its own dependencies, builds its Docusaurus website with a canonical vis.gl
URL, and mounts the result under `/math.gl`, `/probe.gl`, `/deck.gl-community`, or `/tangram.gl`.

```json
{
  "sites": [
    {
      "name": "math.gl",
      "mountPath": "/math.gl",
      "source": "projects/math.gl/website/build",
      "build": [
        {
          "command": "git",
          "args": ["submodule", "update", "--init", "--recursive", "--", "projects/math.gl"]
        },
        {
          "cwd": "projects/math.gl",
          "command": "yarn",
          "args": ["install", "--immutable"]
        },
        {
          "cwd": "projects/math.gl/website",
          "command": "yarn",
          "args": ["docusaurus", "build", "--config", "../../../project-site-configs/math.gl.mjs"]
        }
      ]
    }
  ]
}
```

The `probe.gl` entry follows the same pattern and additionally installs the website workspace
before building it, since the probe.gl monorepo keeps the website lockfile separate.

The `deck.gl-community` entry follows the same pattern as `probe.gl`: the monorepo and its website
have separate lockfiles, and the website is built with a mount-specific Docusaurus configuration.

The `tangram.gl` entry follows the same pattern and mounts its documentation at `/tangram.gl`.

### Future unified documentation navigation

The framework sites remain standalone builds with stable document IDs and their existing URLs.
The root site is intentionally not merging their docs into one sidebar yet. A future Docusaurus
docs-plugin setup can mount each collection under a namespace (`math.gl`, `probe.gl`,
`deck.gl-community`, and `tangram.gl`) while retaining these standalone paths as aliases.

The root `robots.txt` allows indexing of vis.gl while disallowing the `/math.gl/`, `/probe.gl/`,
`/deck.gl-community/`, and `/tangram.gl/` mirror trees. Each mounted project site also includes a matching
`robots.txt` for direct access, although crawlers use the host-level file as the authoritative
policy.

Project builds must generate URLs and assets for their configured mount path. Sources, build
directories, and mount paths are constrained to this repository and its `out/` directory.
`/math`, `/probe`, and `/deck.gl-community` permanently redirect to their canonical project-site
paths.
