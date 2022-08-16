const { StylableWebpackPlugin } = require('@stylable/webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 3001,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  plugins: [
    new StylableWebpackPlugin(),
    new HtmlWebpackPlugin({ title: 'Stylable App' }),
  ],
  cache: { type: 'filesystem' },
  ignoreWarnings: [
    { module: /wix-style-react/ }, // this is needed because WSR is using Stylable@3 syntax which Stylable@4 webpack plugin considering deprecated. This is causing the "red warnings" in dev mode. This line will prevents the warnings to break the dev mode.
  ],
};
