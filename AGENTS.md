<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project site submodules

The generated project documentation sites are pinned Git submodules under `projects/` and
assembled into the main static export by `project-sites.json`.

### Moving a project pin

- Update the upstream project first. Website or documentation changes belong in the upstream
  repository; this repository should only pin the resulting commit.
- Fetch the desired upstream commit and check it out in the submodule, for example:
  `git -C projects/math.gl fetch origin master` followed by
  `git -C projects/math.gl checkout <commit>`.
- Stage the gitlink from the vis.gl root with `git add projects/math.gl` (and/or
  `projects/probe.gl`). The build script runs `git submodule update` from the index, so staging
  the new pin before running `yarn build` prevents the build from silently resetting it.
- Start from a clean generated output directory (`rm -r out`), then run `yarn check`. This
  installs each pinned project's dependencies, builds each website with its mount configuration,
  and assembles the results under `out/`.
- Verify `out/math.gl/index.html` and `out/probe.gl/index.html` exist and that generated asset
  URLs use `/math.gl/` and `/probe.gl/` respectively.
- Commit the gitlink update together with any `project-sites.json` or
  `project-site-configs/*.mjs` changes, then open the vis.gl PR. Do not commit build output or
  changes made inside a submodule checkout.
