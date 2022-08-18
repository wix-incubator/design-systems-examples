const {
  StylableWebpackPlugin,
  applyWebpackConfigStylableExcludes,
} = require('@stylable/webpack-plugin');

const StylableOptimizer = require('@stylable/optimizer').StylableOptimizer;
const stylableOptimizer = new StylableOptimizer();

module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      // causes provided packages to be bundled (not external)
      bundleLibs(config, new Set(['wix-style-react', 'wix-ui-core']));
    }

    // excludes other configs from attempting to handle stylable files
    applyWebpackConfigStylableExcludes(config);

    config.plugins.push(
      new StylableWebpackPlugin({
        filterAssets: () => false,
        filename: 'static/css/stylable.[contenthash].css',
        optimizer: stylableOptimizer,
      }),
    );

    return config;
  },
};

function bundleLibs(config, packages) {
  if (
    !Array.isArray(config.externals) &&
    config.externals.length === 1 &&
    typeof config.externals[0] === 'function'
  ) {
    throw new Error(
      'Invalid configuration: expected config.externals to be an Array with a single function. got ' +
        JSON.stringify(config.externals),
    );
  }
  const nextExternals = config.externals[0];
  config.externals = [
    async (ctx) => {
      for (const pack of packages) {
        if (ctx.request.startsWith(pack)) {
          return false;
        }
      }
      return nextExternals(ctx);
    },
  ];
}
