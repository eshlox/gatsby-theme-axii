<p align="center">
  <img width="500" height="500" src="https://raw.githubusercontent.com/eshlox/gatsby-theme-axii/master/packages/site/src/images/avatar.png" />
</p>

# AXII - A Gatsby blog theme

[![Netlify Status](https://api.netlify.com/api/v1/badges/e7989bb9-c63c-4670-9136-ebe5545459ed/deploy-status)](https://app.netlify.com/sites/gatsby-theme-axii/deploys)
[![npm version](https://badge.fury.io/js/%40eshlox%2Fgatsby-theme-axii.svg)](https://badge.fury.io/js/%40eshlox%2Fgatsby-theme-axii)

## Demo

- https://gatsby-theme-axii.netlify.com
- https://eshlox.net

## Features

- Markdown/MDX support
- Aloglia search
- Light/Dark mode
- SEO, RSS, sitemap

## Example site - source code

You can find the example site code in [packages/site](https://github.com/eshlox/gatsby-theme-axii/tree/master/packages/site) directory.

## How to use the theme

1. Create a new directory and add `package.json` file with this content:

```json
{
  "private": true,
  "name": "blog",
  "version": "0.0.1",
  "license": "MIT",
  "scripts": {
    "build": "gatsby build",
    "develop": "gatsby develop",
    "clean": "gatsby clean"
  }
}
```

2. Installation

```
npm install gatsby @eshlox/gatsby-theme-axii
```

3. Create `.env` file to provide Algolia credentials.

```env
ALGOLIA_APPLICATION_ID=APP-ID
ALGOLIA_ADMIN_API_KEY=ADMIN-API-KEY
ALGOLIA_SEARCH_API_KEY=SEARCH-API-KEY
```

4. Run the development server.

```sh
npm run develop
```

5. Build the site.

```sh
npm run build
```

## Configuration

Create a `gatsby-config.js` file, use the configuration below and modify it to your needs.

```js
// Loads environment variables from a .env file into process.env
require("dotenv").config();

const options = {
  // The directory with blog posts (markdown/mdx files)
  contentPosts: "content/posts",
  // The site configuration
  siteMetadata: {
    // The site URL
    siteUrl: `https://gatsby-theme-axii.netlify.com`,
    // The index page title
    siteTitle: `Homepage`,
    // The site description
    siteDescription: `Very simple blog theme.`,
    // Author data
    author: {
      nickname: `eshlox`,
      // Author name. It's added to each page title.
      name: `Foo Bar`,
      email: `email@example.com`
    },
    // Social accounts. Remove to disable.
    social: {
      twitter: {
        username: "eshlox",
        url: "https://twitter.com/eshlox"
      },
      github: {
        url: "https://github.com/eshlox/gatsby-theme-axii"
      },
      linkedin: {
        url: "https://linkedin.com/eshlox"
      },
      telegram: {
        url: "https://telegram.me/eshlox"
      }
    },
    // Data used for the manifest page file
    manifest: {
      name: `AXII - A Gatsby blog theme`,
      short_name: `AXII`
    },
    // Data used to display support component. Remove to disable.
    support: {
      buymeacoffee: {
        url: "https://www.buymeacoffee.com/eshlox"
      }
    },
    // Comments services. Remove to disable.
    comments: {
      disqus: {
        shortname: "axii-a-gatsby-theme"
      }
    },
    // Alogolia application ID and credentials
    search: {
      algolia: {
        posts: {
          applicationId: process.env.ALGOLIA_APPLICATION_ID,
          searchApiKey: process.env.ALGOLIA_SEARCH_API_KEY,
          adminApiKey: process.env.ALGOLIA_ADMIN_API_KEY
        }
      }
    }
  }
};

const plugins = [
  {
    resolve: "@eshlox/gatsby-theme-axii",
    options
  }
];

module.exports = {
  plugins
};
```

### Index page

To build the index page, create an `index.mdx` file in `src/pages` directory. It supports MDX so you can import and use all components. Components from [src/components](https://github.com/eshlox/gatsby-theme-axii/tree/master/packages/gatsby-theme-axii/src/components) are available automatically. Example:

```mdx
import Avatar from "@eshlox/gatsby-theme-axii/src/components/Avatar";
import Seo from "@eshlox/gatsby-theme-axii/src/components/SEO";
import {
  Section,
  SectionContainer
} from "@eshlox/gatsby-theme-axii/src/components/Section";

<Seo />
<SectionContainer>
  <Section>
    <h1>eshlox</h1>
  </Section>
  <Section>
    <Avatar />
  </Section>
  <Section>
    <h1>My awesome blog.</h1>
  </Section>
</SectionContainer>
```

### Avatar and site favicon.

Add `avatar.png` and `icon.png` (favicon) files to the `src/images` directory.

### Blog posts

By default, blog posts should be stored in the `content/posts` directory. Example structure:

```
content
└── posts
    └── 2019
        ├── music-from-aladdin-2019
        │   └── index.mdx
        ├── photos-from-unsplash
        │   ├── images
        │   │   ├── carly-johnston-ndsA009eNy8-unsplash.jpg
        │   │   ├── eberhard-grossgasteiger-iYyfRNIgckk-unsplash.jpg
        │   │   ├── jamie-fenn-kj7Gp4LIvtw-unsplash.jpg
        │   │   └── todd-trapani-kLKg4fJlmqM-unsplash.jpg
        │   └── index.mdx
        └── twitter-test
            └── index.mdx
```

Example post file:

```md
---
title: Post title
date: 2019-11-05
categories: ["category"]
tags: ["tag1", "tag2"]
language: en
slug: post-title
comments: false
---

Post body.
```

| Key          | Required | Default Value            | Description                 |
| ------------ | -------- | ------------------------ | --------------------------- |
| `title`      | `True`   |                          | Post title                  |
| `date`       | `True`   |                          | Post creation date          |
| `categories` | `False`  |                          | List of the post categories |
| `tags`       | `False`  |                          | List of the post tags       |
| `language`   | `False`  | `en`                     | Post language               |
| `slug`       | `False`  | Autogenerated from title | Post slug (used in URL)     |
| `comments`   | `False`  | `True`                   | Enable/disable comments     |

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
