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
  `projects/probe.gl`, `projects/deck.gl-community`, or `projects/tangram.gl`). The build script runs `git submodule update` from the index, so staging
  the new pin before running `yarn build` prevents the build from silently resetting it.
- Start from a clean generated output directory (`rm -r out`), then run `yarn check`. This
  installs each pinned project's dependencies, builds each website with its mount configuration,
  and assembles the results under `out/`.
- Verify the root `out/robots.txt` allows the main vis.gl pages and disallows each mirrored project
  path. Also verify each mounted site's `index.html` and `robots.txt` exist, and that generated
  asset URLs use its configured mount path.
- Commit the gitlink update together with any `project-sites.json` or
  `project-site-configs/*.mjs` changes, then open the vis.gl PR. Do not commit build output or
  changes made inside a submodule checkout.
