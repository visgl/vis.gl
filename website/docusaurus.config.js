const path = require('path');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'vis.gl',
  tagline: 'Open source tools for geospatial visualization',
  url: 'https://vis.gl',
  baseUrl: '/',
  favicon: '/favicon.png',
  organizationName: 'visgl',
  projectName: 'vis.gl',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  markdown: {hooks: {onBrokenMarkdownLinks: 'warn'}},
  future: {
    v4: true,
    faster: true
  },
  staticDirectories: ['static', '../public'],
  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        pages: {path: 'src/pages'},
        theme: {
          customCss: [
            path.resolve(__dirname, '../styles/fonts.css'),
            path.resolve(__dirname, '../styles/globals.css'),
            path.resolve(__dirname, '../styles/layout.css')
          ]
        }
      }
    ]
  ],
  themeConfig: {
    navbar: {hideOnScroll: false},
    metadata: [
      {name: 'description', content: 'Open source tools for geospatial visualization'},
      {name: 'keywords', content: 'geospatial visualization, deck.gl, luma.gl, math.gl, OpenJS'}
    ]
  },
  plugins: [function yamlLoaderPlugin() {
    return {
      name: 'yaml-loader',
      configureWebpack() {
        return {
          resolve: {fallback: {assert: require.resolve('assert/')}} ,
          module: {rules: [{test: /\.ya?ml$/, use: [{loader: require.resolve('yaml-loader')}]}]}
        };
      }
    };
  }]
};

module.exports = config;
