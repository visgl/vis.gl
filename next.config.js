/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  webpack: configuration => {
    configuration.module.rules.push({
      test: /\.ya?ml$/,
      use: 'yaml-loader'
    });
    return configuration;
  },
  async redirects() {
    return [
      'react-google-maps', 
      'react-map-gl', 
      'math.gl', 
      'deck.gl-community', 
      'probe.gl'
    ].map(project => (
      {
        source: `/${project}`,
        destination: `https://visgl.github.io/${project}/`,
        permanent: false,
        basePath: false
      }
    ))
  }
};

module.exports = nextConfig;
