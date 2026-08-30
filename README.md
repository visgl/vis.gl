# vis.gl

This repository contains the [vis.gl](https://vis.gl) website. It is a statically exported
Next.js site deployed by Netlify.

The existing framework catalog, showcases, news, blog, and project history are retained here.
[Open Visualization](https://www.openvisualization.org/) provides the broader collaboration
space's current community, governance, and event information.

## Development

Use Node.js 22.22.1 or later and Yarn 4:

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

For example, after adding the math.gl repository at `projects/math.gl`, its configuration would
look like this:

```json
{
  "sites": [
    {
      "name": "math.gl",
      "mountPath": "/math",
      "source": "projects/math.gl/website/build",
      "build": {
        "cwd": "projects/math.gl",
        "command": "yarn",
        "args": ["workspace", "project-website", "build"]
      }
    }
  ]
}
```

Project builds must generate URLs and assets for their configured mount path. Sources, build
directories, and mount paths are constrained to this repository and its `out/` directory.
