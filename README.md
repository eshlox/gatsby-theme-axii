<p align="center">
  <img width="500" height="500" src="https://raw.githubusercontent.com/eshlox/gatsby-theme-axii/master/packages/site/content/images/avatar.png" />
</p>

# AXII - A Gatsby blog theme

[![Netlify Status](https://api.netlify.com/api/v1/badges/e7989bb9-c63c-4670-9136-ebe5545459ed/deploy-status)](https://app.netlify.com/sites/gatsby-theme-axii/deploys)
[![npm version](https://badge.fury.io/js/%40eshlox%2Fgatsby-theme-axii.svg)](https://badge.fury.io/js/%40eshlox%2Fgatsby-theme-axii)

## Demo

- https://gatsby-theme-axii.netlify.app
- https://eshlox.net

## Features

- Material UI
- Markdown/MDX support
- Aloglia search
- Light/Dark mode
- SEO, RSS, sitemap

## Theme documentation

https://github.com/eshlox/gatsby-theme-axii/blob/master/packages/gatsby-theme-axii/README.md

## Development

This repository uses [yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/), [conventional commits](https://www.conventionalcommits.org) and [lerna](https://lerna.js.org).

### Install all dependencies

```sh
lerna bootstrap
```

### Run the development server

```sh
yarn workspace site develop
```

### Publish packages to NPM

```sh
lerna publish
```

### Yarn

## Add package

```sh
yarn workspace @eshlox/gatsby-theme-axii add packageName
```
