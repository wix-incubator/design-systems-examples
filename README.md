# Design Systems Examples

## Description
In wix, we’re developing and maintaining several component libraries such as [wix-style-react](https://www.wix-style-react.com), [wix-ui-tpa](https://www.wix-pages.com/wix-ui-tpa) and wix-base-ui. 

This repository demonstrates the usage of our libraries and allows developers to understand how to adjust their build flows to work with our libraries’ dependencies (e.g. [stylable](https://stylable.io/)).

Each library has few examples of how to generate a project. The projects were created using these methods:

* [`create-styleable-app`](https://stylable.io/docs/getting-started/install-configure/)
* [`Basic webpack configuration`](https://webpack.js.org/guides/getting-started/)

Each method has an example package.

This repository is a monorepo managed by [lerna](https://github.com/lerna/lerna). 

As stated, it contains the following UI libraries:

* `wix-style-react`
* `wix-ui-tpa` /* TODO: Will be added in the future */
* `wix-base-ui` /* TODO: Will be added in the future */

## How to setup

1. Clone the repo

```bash
git clone git@github.com:wix-incubator/design-systems-examples.git
```

2. Install all dependencies

```bash
yarn
```

3.1. In order to run all the packages in parallel use

```bash
npx lerna start
```

3.2. In order to run a specific package use

```bash
yarn start:{package-name} (e.g yarn start:wix-style-react-app-csa)
```

## CI / CD

### CI
The project is being [build](https://github.com/wix-incubator/design-systems-examples/blob/main/.github/workflows/build.yml) using [Github Actions](https://docs.github.com/en/actions). 

Currently, each push triggers a whole project build. 
In the future, we may separate the build logic so that each push would trigger the build of the relevant package on its own.
Each push to `main` [triggers](https://github.com/wix-incubator/design-systems-examples/blob/main/.github/workflows/publish.yml) [a CD process](###CD) and in case the build fails, a slack message is being sent to the relevant channel at Wix. 
In addition, this process is being scheduled and running once a day.

### CD 
Each package is [published](https://github.com/wix-incubator/design-systems-examples/blob/main/.github/workflows/publish.yml) using [Vercel](https://vercel.com).


/* TODO: Currently, we're using  a private Vercel account. Should be changed to a Wix Vercel account. */