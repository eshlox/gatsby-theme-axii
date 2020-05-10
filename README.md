![AXII - A Gatsby blog theme](./packages/site/static/og-default.png "AXII - A Gatsby blog theme")

# AXII - A Gatsby blog theme

[![Netlify Status](https://api.netlify.com/api/v1/badges/e7989bb9-c63c-4670-9136-ebe5545459ed/deploy-status)](https://app.netlify.com/sites/gatsby-theme-axii/deploys) ![NPM Licence](https://img.shields.io/npm/l/@eshlox/gatsby-theme-axii) ![npm](https://img.shields.io/npm/v/@eshlox/gatsby-theme-axii)

## Demo

- https://gatsby-theme-axii.netlify.app
- https://eshlox.net

## Features

- Markdown/MDX support
- Material UI
- Code syntax highlighter
- Responsive images
- Aloglia search
- Light/Dark mode
- SEO
- RSS
- Sitemap
- Sentry support
- Twitter & Youtube embeds support

## Theme documentation

https://github.com/eshlox/gatsby-theme-axii/blob/master/packages/gatsby-theme-axii/README.md

## Development

This repository uses [yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/), [conventional commits](https://www.conventionalcommits.org) and [lerna](https://lerna.js.org).

### Install all dependencies

```sh
npx lerna bootstrap
```

### Run the development server

```sh
yarn workspace site develop
```

### Build the website

```sh
yarn workspace site build
```

### Publish packages to NPM

```sh
HUSKY_SKIP_HOOKS=1 GH_TOKEN=GITHUB-TOKEN lerna publish
```

## Yarn

### Add a package

```sh
yarn workspace @eshlox/gatsby-theme-axii add packageName
```
