const { StylableWebpackPlugin } = require('@stylable/webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        port: 3000,
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
            {
                test: /\.scss$/,
                include: [
                    path.join(__dirname, 'node_modules/wix-animations'),
                    path.join(__dirname, 'node_modules/wix-style-react'),
                    path.join(__dirname, 'node_modules/bootstrap-sass'),
                ],
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                                exportLocalsConvention: 'camelCase',
                            },
                        },
                    },
                    {
                        loader: 'resolve-url-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    plugins: [
        new StylableWebpackPlugin({
        unsafeMuteDiagnostics: {
            DUPLICATE_MODULE_NAMESPACE: true
        }
    }), new HtmlWebpackPlugin({ title: 'Stylable App' })],
    cache: { type: 'filesystem' },
};
