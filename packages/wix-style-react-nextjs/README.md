# Wix Style React

## Generated using `create-next-app`

`wix-style-react` is built with Stylable. Therefore, in order to use it we had to create a Stylable compatible app.

## How this project was created?

### Creating app using NextJS

Generating a project using [`create-next-app`](https://nextjs.org/learn/basics/create-nextjs-app/setup):

```bash
npx create-next-app <project-name> --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
```

### Adding Stylable to an existing App

1. Installing Stylable:

```bash
yarn add @stylable/webpack-plugin @stylable/optimizer --dev
```

2. Add next.config.js to your root:

```bash
touch next.config.js
```

3. Fill `next.config.js` with configuration below:

```js
const { decorateNextJsWebpackConfig } = require('wix-style-react/setup');

module.exports = {
  reactStrictMode: true,
  webpack: decorateNextJsWebpackConfig,
};
```

### Integrating Wix Style React

1. Install Wix Style React as a dependency:

```bash
yarn add wix-style-react
```

2. Use a component in `pages/index.js`:

```jsx
import { Button } from 'wix-style-react';
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
yarn start:wix-style-react-nextjs
```

2. **package directory**:

```bash
cd packages/wix-style-react-nextjs
yarn
yarn start
```
