<p align="center">
  <img width="500" height="500" src="https://raw.githubusercontent.com/eshlox/gatsby-theme-axii/master/packages/site/content/images/avatar.png" />
</p>

# AXII - A Gatsby blog theme

[![Netlify Status](https://api.netlify.com/api/v1/badges/e7989bb9-c63c-4670-9136-ebe5545459ed/deploy-status)](https://app.netlify.com/sites/gatsby-theme-axii/deploys)
[![npm version](https://badge.fury.io/js/%40eshlox%2Fgatsby-theme-axii.svg)](https://badge.fury.io/js/%40eshlox%2Fgatsby-theme-axii)

## Demo

- https://gatsby-theme-axii.netlify.com
- https://eshlox.net

## Features

- Material UI
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
    "build": "AWS_LAMBDA_FUNCTION_NAME=puppeteer gatsby build",
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
      email: `email@example.com`,
      site: `gatsby-theme-axii.netlify.com`
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
    },
    errorReporting: {
      sentry: {
        dsn: process.env.SENTRY_DSN_URL
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

To build the index page, create an `index.mdx` file in `content/pages` directory. It supports MDX so you can import and use all components. Components from [src/components](https://github.com/eshlox/gatsby-theme-axii/tree/master/packages/gatsby-theme-axii/src/components) are available automatically. Example:

```mdx
import Seo from "@eshlox/gatsby-theme-axii/src/components/SEO";
import Avatar from "@eshlox/gatsby-theme-axii/src/components/Avatar";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

<Seo />
<Grid container direction="column" justify="center" alignItems="center">
  <Grid item xs={12}>
    <Typography variant="h1" component="h1" align="center" gutterBottom>
      AXII
    </Typography>
  </Grid>
  <Grid item xs={12}>
    <Avatar />
  </Grid>
  <Grid item xs={12}>
    <Typography variant="h2" component="h2" align="center" gutterBottom>
      A Gatsby blog theme.
    </Typography>
  </Grid>
</Grid>

---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet venenatis risus ac malesuada. Sed accumsan tellus libero, porttitor aliquam neque consequat aliquet. Nulla massa libero, ultricies ut sapien ac, sollicitudin pretium felis. Quisque non tellus fringilla, tempus sapien nec, vulputate nulla. Vivamus eleifend fringilla felis, ac facilisis nunc congue in. Nullam ac aliquam neque. Nam egestas molestie venenatis. Vivamus vitae ipsum in sem dapibus sodales vitae nec arcu.

Aliquam sed malesuada purus, vel mattis libero.

[eshlox.net](https://eshlox.net)

#### <NewReleasesIcon /> Etiam lobortis elementum dui eleifend convallis

Proin fermentum massa vel dignissim molestie. Fusce sollicitudin viverra aliquam. Nulla porttitor nec odio vel sollicitudin. Proin quam urna, pharetra quis facilisis quis, laoreet eu dolor. Donec luctus, neque porta gravida imperdiet, ipsum nisi tincidunt tortor, vel ullamcorper neque leo id nulla. Proin nec mauris eu lectus tempor faucibus ut in dolor. Etiam lobortis elementum dui eleifend convallis. Praesent nulla elit, blandit ac odio non, pulvinar ultricies nisi.

---

> Phasellus varius felis dictum, cursus nisi ac, tristique enim. Vestibulum fringilla non leo nec rutrum. Vestibulum nec venenatis lacus, nec efficitur eros. Maecenas porttitor varius odio sed volutpat.

---

![Photo by Amanda Kerr on Unsplash](./images/amanda-kerr-jpMyAqHat7g-unsplash.jpg "Photo by Amanda Kerr on Unsplash")
```

### Avatar and site favicon.

Add `avatar.png` and `icon.png` (favicon) files to the `content/images` directory.

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
