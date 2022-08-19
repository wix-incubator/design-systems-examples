const { decorateNextJsWebpackConfig } = require('wix-style-react/setup');

module.exports = {
  reactStrictMode: true,
  webpack: decorateNextJsWebpackConfig,
};
