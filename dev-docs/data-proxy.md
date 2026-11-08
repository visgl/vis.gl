# Public data proxy

`GET` and `HEAD /api/proxy?url=<encoded HTTPS URL>` stream public GitHub raw data.
The exact browser origins and upstream hostname live in `netlify/edge-functions/lib/proxy.mjs`.
Reviewed repositories and data directories live in `netlify/edge-functions/lib/upstreams.mjs`.
GitHub Pages projects share `https://visgl.github.io`; CORS cannot restrict individual paths.
No credentials are forwarded. CORS and Fetch Metadata are browser controls, not authentication.

## Approved example data

Only `master` (also spelled `refs/heads/master`) is accepted. Other branches, tags,
commit SHAs and unlisted paths are denied, including on redirects.

| Repository                                              | Allowed directories                                                                  | Example consumers                                                        |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `visgl/deck.gl-data`, legacy `uber-common/deck.gl-data` | `examples/`, `website/`, `formats/`, `3d-tiles/`, `luma.gl/examples/`                | deck.gl gallery, loaders.gl format/tiles examples, luma.gl glTF examples |
| `visgl/react-map-gl`, legacy `uber/react-map-gl`        | `examples/.data/`                                                                    | react-map-gl GeoJSON and zoom-to-bounds examples                         |
| `visgl/deck.gl-community`                               | `examples/layers/skybox-assets/`, `modules/graph-layers/test/data/__fixtures__/dot/` | skybox and graph-viewer examples                                         |
| `visgl/luma.gl`                                         | `examples/api/cubemap/`                                                              | deck.gl-community skybox example                                         |

The repository root, unrelated source files and third-party datasets are not approved.
Directory matching includes the trailing slash boundary and requires a child path.
Percent-encoded and empty path segments are rejected conservatively to avoid ambiguous
decoding across runtimes. New roots or refs require a reviewed change with an example
consumer, licensing check and tests; do not broaden this to an entire repository or host.

## Provider policies and compliance boundaries

Reviewed November 8, 2026. These are implementation safeguards and our interpretation,
not provider approval or a guarantee of compliance at any traffic volume.

- [Netlify's proxy documentation](https://docs.netlify.com/manage/routing/redirects/rewrites-proxies/#proxy-to-another-service)
  describes proxying external services for a site's CORS needs. This endpoint serves that
  purpose for vis.gl documentation and examples; it is not offered as standalone hosting.
- [Netlify Acceptable Use Policy, sections 2, 4 and 5](https://www.netlify.com/legal/acceptable-use-policy/)
  restricts open proxies, unrelated file distribution, standalone resale and undue load.
  Our server-side repository/ref/directory allowlist restricts even clients that forge
  Origin headers to reviewed example data. Rate limiting and a kill switch reduce abuse;
  they do not authenticate users or enforce a global bandwidth budget. The published
  November 4 update [takes effect December 4, 2026](https://www.netlify.com/changelog/updates-to-our-terms-and-privacy-statement/).
  Seek Netlify's written confirmation before broad production adoption; do not describe
  the endpoint as provider-approved.
- [GitHub Acceptable Use Policies, sections 3, 4 and 9](https://docs.github.com/en/site-policy/acceptable-use-policies/github-acceptable-use-policies)
  require respecting intellectual property and prohibit excessive automated activity;
  GitHub may throttle excessive bandwidth. Public visibility is not a redistribution
  license. Maintainers must check each dataset's license/attribution before adoption.
  The proxy preserves browser cache policy and validators, forwards conditional requests,
  preserves upstream error statuses and Retry-After, and does not automatically retry or
  bypass upstream restrictions. Direct fetching should be preferred in the subsequent
  client integration. Shared edge caching remains disabled, so every uncached request
  still reaches GitHub; the request limit is not a guarantee of acceptable bandwidth.
- Netlify's published AUP section 6 requires permission for benchmark tests. Comparative
  throughput benchmarks are deferred pending clarification/permission. Functional byte,
  status, header and streaming correctness tests remain part of validation.

Before enabling example traffic, confirm provider terms applicable to the team's account,
dataset rights, usage allowances and alerts. The proxy is public, so monitor misuse and
disable it if necessary. Large-file or general-purpose distribution is outside its scope.

Set `DATA_PROXY_DISABLED=true` in Netlify to disable upstream requests. The handler emits
its own CORS and security headers. Shared CDN caching is disabled; upstream browser cache
policy is preserved. Length and encoding headers are deliberately omitted because Fetch
runtimes may decompress the body. Encoded partial responses fail closed.

The upstream header timeout is 25 seconds. Streaming uses backpressure and does not collect
the body. Large-file support and runtime cancellation need deployment verification; no
unrestricted transfer-size guarantee is made. Logs include only host, status, timing and
failure category. Local Docusaurus does not serve the endpoint; use Netlify development tooling.

The platform rate limit is 120 requests per 60 seconds per IP and domain, including
preflights. Enforcement can lag by up to ten seconds. Platform-generated 429 responses
may not carry the handler's CORS headers. This is not a bandwidth or global spending cap.
See [Netlify rate limits](https://docs.netlify.com/manage/security/secure-access-to-sites/rate-limiting/).
Before production adoption, inspect the Netlify team's bandwidth/invocation allowances,
configure usage alerts, and exercise the kill switch. These account settings require
dashboard access and are not installed by this PR. Do not substitute in-memory counters
for distributed rate limits.

Preview validation: fetch public text and binary fixtures, verify browser CORS from approved
origins and rejection of another GitHub Pages origin, compare direct/proxy bytes,
exercise HEAD, conditional and range requests, and verify existing documentation routes.
Shared caching and migrating examples are follow-up changes.
