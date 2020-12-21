const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ibgreen/code/vis.gl/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/ibgreen/code/vis.gl/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/ibgreen/code/vis.gl/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/ibgreen/code/vis.gl/src/pages/blog.js"))),
  "component---src-pages-frameworks-js": hot(preferDefault(require("/Users/ibgreen/code/vis.gl/src/pages/frameworks.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ibgreen/code/vis.gl/src/pages/index.js"))),
  "component---src-pages-inthenews-js": hot(preferDefault(require("/Users/ibgreen/code/vis.gl/src/pages/inthenews.js"))),
  "component---src-pages-showcases-js": hot(preferDefault(require("/Users/ibgreen/code/vis.gl/src/pages/showcases.js")))
}

