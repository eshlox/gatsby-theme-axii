const path = require("path");
const queries = require("./src/utils/algolia");

module.exports = (options) => {
  const { siteMetadata } = options;

  const manifest = {
    resolve: `gatsby-plugin-manifest`,
    options: {
      background_color: `#ffffff`,
      display: `standalone`,
      icon: `content/images/icon.png`,
      name: siteMetadata.manifest.name,
      short_name: siteMetadata.manifest.short_name,
      start_url: `/`,
      theme_color: `#000000`,
    },
  };

  const algolia = {
    resolve: `gatsby-plugin-algolia`,
    options: {
      appId: siteMetadata.search.algolia.posts.applicationId,
      apiKey: siteMetadata.search.algolia.posts.adminApiKey,
      indexName: siteMetadata.search.algolia.posts.indexName,
      queries,
      chunkSize: 10000, // default: 1000
    },
  };

  const mdx = {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.mdx`, `.md`],
      defaultLayouts: {
        default: require.resolve("./src/templates/page/index.tsx"),
      },
      gatsbyRemarkPlugins: [
        `gatsby-remark-copy-linked-files`,
        `gatsby-remark-embedder`,
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 960,
            quality: 80,
            linkImagesToOriginal: true,
            withWebp: true,
            showCaptions: false,
            disableBgImageOnAlpha: true,
          },
        },
        {
          resolve: "gatsby-remark-external-links",
          options: {
            target: "_blank",
            rel: "noreferrer",
          },
        },
      ],
    },
  };

  const seo = {
    resolve: "gatsby-plugin-next-seo",
    options: {
      title: siteMetadata.author.name,
      titleTemplate: `%s | ${siteMetadata.author.name}`,
      language: "en",
      description: siteMetadata.siteDescription,
      canonical: siteMetadata.siteUrl,
      openGraph: {
        type: "website",
        locale: "en_US",
        url: siteMetadata.siteUrl,
        images: [
          {
            url: `${siteMetadata.siteUrl}/static/og.jpg`,
            width: 1200,
            height: 630,
          },
        ],
        profile: {
          firstName: siteMetadata.author.firstName,
          lastName: siteMetadata.author.lastName,
          username: siteMetadata.author.nickname,
          gender: siteMetadata.author.gender,
        },
      },
      twitter: {
        handle: siteMetadata.social.twitter.handle,
        site: siteMetadata.social.twitter.handle,
        cardType: "summary_large_image",
      },
    },
  };

  const rss = {
    resolve: `gatsby-plugin-feed`,
    options: {
      query: `
      {
        site {
          siteMetadata {
            title: siteTitle
            description: siteDescription
            siteUrl
            site_url: siteUrl
          }
        }
      }
    `,
      setup: ({
        query: {
          site: { siteMetadata },
        },
        ...rest
      }) => {
        siteMetadata.feed_url = siteMetadata.siteUrl + "/rss.xml";
        siteMetadata.image_url =
          siteMetadata.siteUrl + "/icons/icon-512x512.png";
        const siteMetadataModified = siteMetadata;
        siteMetadataModified.feed_url = `${siteMetadata.siteUrl}/rss.xml`;
        siteMetadataModified.image_url = `${siteMetadata.siteUrl}/icons/icon-512x512.png`;

        return {
          ...siteMetadataModified,
          ...rest,
        };
      },
      feeds: [
        {
          serialize: ({ query: { site, allArticle } }) => {
            return allArticle.edges.map((edge) => {
              return {
                ...edge.node,
                description: edge.node.excerpt,
                url: site.siteMetadata.siteUrl + edge.node.slug,
                guid: site.siteMetadata.siteUrl + edge.node.slug,
              };
            });
          },
          query: `{
            allArticle {
              edges {
                node {
                  excerpt
                  slug
                  title
                  date(formatString: "YYYY-MM-DD")
                  tags
                  categories
                  language
                }
              }
            }
          }
        `,
          output: "/rss.xml",
          title: `${siteMetadata.author.name} - ${siteMetadata.siteDescription}`,
        },
      ],
    },
  };

  const sitemap = {
    resolve: `gatsby-plugin-advanced-sitemap`,
    options: {
      query: `
        {
          allArticle {
            edges {
              node {
                id
                updated_at: date
                slug
              }
            }
          }
        }`,
      mapping: {
        allArticle: {
          sitemap: `posts`,
        },
      },
      exclude: [
        `/dev-404-page`,
        `/404`,
        `/404.html`,
        `/offline-plugin-app-shell-fallback`,
      ],
      createLinkInHead: true,
      addUncaughtPages: true,
    },
  };

  const sentry = {
    resolve: "gatsby-plugin-sentry",
    options: {
      dsn: siteMetadata.errorReporting.sentry.dsn,
      environment: process.env.NODE_ENV,
      enabled: () => process.env.NODE_ENV === "production",
    },
  };

  return {
    siteMetadata,
    plugins: [
      `gatsby-image`,
      `gatsby-plugin-material-ui`,
      `gatsby-plugin-remove-trailing-slashes`,
      `gatsby-plugin-twitter`,
      `gatsby-plugin-typescript`,
      `gatsby-plugin-robots-txt`,
      `gatsby-plugin-sharp`,
      `gatsby-remark-copy-linked-files`,
      `gatsby-transformer-sharp`,
      seo,
      sitemap,
      manifest,
      algolia,
      rss,
      mdx,
      sentry,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `posts`,
          path: `content/posts`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `content/images`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `content/pages/images`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: path.resolve(__dirname, `content/pages/images`),
        },
      },
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          name: `pages`,
          path: `content/pages`,
        },
      },
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          name: `pages`,
          path: path.resolve(__dirname, `content/pages`),
        },
      },
    ],
  };
};
