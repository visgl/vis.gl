# Public data proxy

`GET` and `HEAD /api/proxy?url=<encoded HTTPS URL>` stream public GitHub raw data.
The exact origin and upstream allowlists live in `netlify/edge-functions/lib/proxy.mjs`.
GitHub Pages projects share `https://visgl.github.io`; CORS cannot restrict individual paths.
No credentials are forwarded. CORS and Fetch Metadata are browser controls, not authentication.

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
origins and rejection of another GitHub Pages origin, compare direct/proxy bytes and latency,
exercise HEAD, conditional and range requests, and verify existing documentation routes.
Shared caching and migrating examples are follow-up changes.
