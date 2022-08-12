# Wix Style React

## Generated using `create-stylable-app`

`wix-style-react` is built with Stylable. Therefore it is recommended to build your project using a Stylable compatible template in order to save some configurations.
The app is available [here](https://design-systems-examples.vercel.app).

## How this project was created?

### Creating Stylable Compatible App

Generating a project using [`create-stylable-app`](https://stylable.io/docs/getting-started/install-configure/):

```bash
npx create-stylable-app <project-name>
```

### Integrating Wix Style React

1. Install Wix Style React as a dependency:

```bash
yarn add wix-style-react
```

2. Install required loader:

```bash
yarn add url-loader --dev
```

3. Use loader in `webpack.config.js` file:

```diff
  const { StylableWebpackPlugin } = require('@stylable/webpack-plugin');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
+ const path = require('path');

  module.exports = {
      mode: 'development',
      devtool: 'source-map',
      module: {
          rules: [
              {
                  test: /\.tsx?$/,
                  loader: 'ts-loader',
              },
-             {
-                 test: /\.(png|jpg|jpeg|gif|svg)$/,
-                 loader: 'asset',
-             },
+             {
+                 test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
+                 use: [
+                     {
+                         loader: 'url-loader',
+                     }
+                 ]
+             },
          ],
      },
      resolve: {
          extensions: ['.ts', '.tsx', '.mjs', '.js', '.json'],
      },
      plugins: [new StylableWebpackPlugin(), new HtmlWebpackPlugin({ title: 'Stylable App' })],
  };
```

4. Run your app:

```bash
yarn start
```

### Running the example

The project can be run from either the root directory or the package itself:

1. **root directory**:

```bash
yarn
yarn start:wix-style-react-app-csa
```

2. **package directory**:

```bash
cd packages/wix-style-react-app-csa
yarn
yarn start
```
