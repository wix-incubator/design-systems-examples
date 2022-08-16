const {
  StylableWebpackPlugin,
  applyWebpackConfigStylableExcludes,
} = require('@stylable/webpack-plugin');

/*
 * single optimizer for NextJS multiple builds
 * in order to sync client/server namespaces
 */
const StylableOptimizer = require('@stylable/optimizer').StylableOptimizer;
const stylableOptimizer = new StylableOptimizer();

module.exports = {
  webpack: (config) => {
    /* exclude Stylable files from all other loaders */
    applyWebpackConfigStylableExcludes(config);

    /* add the Stylable plugin to the webpack configuration */
    config.plugins.push(
      new StylableWebpackPlugin({
        /* let NextJS handle assets */
        filterAssets: () => false,

        /* output CSS to the correct location */
        filename: 'static/css/stylable.[contenthash].css',

        /* a shared optimizer instance */
        optimizer: stylableOptimizer,
      }),
    );

    config.ignoreWarnings = [
      { module: /wix-style-react/ }, // this is needed because WSR is using Stylable@3 syntax which Stylable@5 webpack plugin considering deprecated. This is causing the "red warnings" in dev mode. This line will prevents the warnings to break the dev mode.
    ];

    return config;
  },
};
