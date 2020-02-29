require("dotenv").config();

const options = {
  contentPosts: "content/posts",
  siteMetadata: {
    siteUrl: `https://gatsby-theme-axii.netlify.com`,
    siteTitle: `Homepage`,
    siteDescription: `Very simple blog theme.`,
    author: {
      nickname: `eshlox`,
      name: `AXII - A Gatsby theme`,
      email: `eshlox@vertolabs.com`,
      site: "gatsby-theme-axii.netlify.com"
    },
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
    manifest: {
      name: `AXII - A Gatsby blog theme`,
      short_name: `AXII`
    },
    support: {
      buymeacoffee: {
        url: "https://www.buymeacoffee.com/eshlox"
      }
    },
    comments: {
      disqus: {
        shortname: "axii-a-gatsby-theme"
      }
    },
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
