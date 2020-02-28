const path = require("path");
const queries = require("./src/utils/algolia");

module.exports = options => {
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
      theme_color: `#000000`
    }
  };

  const canonicalUrls = {
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: siteMetadata.siteUrl,
      stripQueryString: true
    }
  };

  const algolia = {
    resolve: `gatsby-plugin-algolia`,
    options: {
      appId: siteMetadata.search.algolia.posts.applicationId,
      apiKey: siteMetadata.search.algolia.posts.adminApiKey,
      queries,
      chunkSize: 10000 // default: 1000
    }
  };

  const mdx = {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.mdx`, `.md`],
      defaultLayouts: {
        default: require.resolve(`./src/layouts/index.ts`)
      },
      gatsbyRemarkPlugins: [
        `gatsby-remark-copy-linked-files`,
        `gatsby-remark-embedder`,
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 1920,
            quality: 80,
            linkImagesToOriginal: false,
            withWebp: true,
            showCaptions: false
          }
        },
        {
          resolve: "gatsby-remark-external-links",
          options: {
            target: "_blank",
            rel: "noreferrer"
          }
        }
      ]
    }
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
          site: { siteMetadata }
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
          ...rest
        };
      },
      feeds: [
        {
          serialize: ({ query: { site, allArticle } }) => {
            return allArticle.edges.map(edge => {
              return {
                ...edge.node,
                description: edge.node.excerpt,
                url: site.siteMetadata.siteUrl + edge.node.slug,
                guid: site.siteMetadata.siteUrl + edge.node.slug
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
          title: `${siteMetadata.author.name} - ${siteMetadata.siteDescription}`
        }
      ]
    }
  };

  return {
    siteMetadata,
    plugins: [
      `gatsby-image`,
      `gatsby-plugin-material-ui`,
      `gatsby-plugin-offline`,
      `gatsby-plugin-remove-trailing-slashes`,
      `gatsby-plugin-twitter`,
      `gatsby-plugin-typescript`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-robots-txt`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-sitemap`, // TODO: sort by date?
      `gatsby-remark-copy-linked-files`,
      `gatsby-transformer-sharp`,
      manifest,
      canonicalUrls,
      algolia,
      rss,
      mdx,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `posts`,
          path: `content/posts`
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `content/images`
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `content/pages/images`
        }
      },
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          name: `pages`,
          path: `content/pages`
        }
      },
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          name: `pages`,
          path: path.resolve(__dirname, `content/pages`)
        }
      }
    ]
  };
};
