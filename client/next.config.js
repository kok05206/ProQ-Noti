/* eslint-disable @typescript-eslint/no-require-imports */
const withPWAInit = require('next-pwa');

const withPWA = require('next-pwa')({
  dest: 'public',
  exclude: [
    // add buildExcludes here
    ({ asset, compilation }) => {
      if (
        asset.name.startsWith('server/') ||
        asset.name.match(
          /^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/
        )
      ) {
        return true;
      }
      return false;
    }
  ]
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  }
};

module.exports = withPWA(nextConfig);
