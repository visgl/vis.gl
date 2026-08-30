/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  turbopack: {
    rules: {
      '*.yaml': {
        loaders: ['yaml-loader'],
        as: '*.js'
      },
      '*.yml': {
        loaders: ['yaml-loader'],
        as: '*.js'
      }
    }
  }
};

module.exports = nextConfig;
