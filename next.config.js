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
  }
};

module.exports = nextConfig;
