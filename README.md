# Design Systems Examples

**Description**: In wix, we’re developing and maintaining several component libraries such as wix-style-react, wix-ui-tpa and wix-base-ui. 
This repository demonstrates the usage of our libraries and allows developers to understand how to adjust their build flows to work with our libraries’ dependencies (e.g. [stylable](https://stylable.io/)).

Each library has few examples of how to generate a project. The projects were created using these methods:

* [`create-styleable-app`](https://stylable.io/docs/getting-started/install-configure/)
* [`Basic webpack configuration`](https://webpack.js.org/guides/getting-started/)
* [`create-react-app`](https://reactjs.org/docs/create-a-new-react-app.html)

Each method has an example package.

This repository is a monorepo managed by lerna.
As stated, it contains the following UI libraries:

* `wix-style-react`
* `wix-ui-tpa`
* `wix-base-ui`