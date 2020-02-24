const path = require("path");
const queries = require("./src/utils/algolia");

module.exports = options => {
  const { siteMetadata } = options;

  return {
    siteMetadata,
    plugins: [
      `gatsby-plugin-twitter`,
      `gatsby-plugin-typescript`,
      `gatsby-plugin-material-ui`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: siteMetadata.manifest.name,
          short_name: siteMetadata.manifest.short_name,
          start_url: `/`,
          background_color: `#ffffff`,
          theme_color: `#000000`,
          display: `standalone`,
          icon: `content/images/icon.png`
        }
      },
      {
        resolve: `gatsby-plugin-canonical-urls`,
        options: {
          siteUrl: siteMetadata.siteUrl,
          stripQueryString: true
        }
      },
      `gatsby-plugin-remove-trailing-slashes`,
      `gatsby-plugin-offline`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `posts`,
          path: `content/posts`
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
        resolve: `gatsby-plugin-algolia`,
        options: {
          appId: siteMetadata.search.algolia.posts.applicationId,
          apiKey: siteMetadata.search.algolia.posts.adminApiKey,
          queries,
          chunkSize: 10000 // default: 1000
        }
      },
      `gatsby-image`,
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [`gatsby-remark-images`, `gatsby-remark-embedder`]
        }
      },
      `gatsby-remark-copy-linked-files`,
      `gatsby-plugin-robots-txt`,
      `gatsby-plugin-sitemap`, // TODO: sort by date?
      {
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
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          defaultLayouts: {
            default: require.resolve(`./src/layouts/index.ts`)
          },
          gatsbyRemarkPlugins: [
            `gatsby-remark-copy-linked-files`,
            {
              resolve: `gatsby-remark-autolink-headers`,
              options: {
                icon: `<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation" title="fontSize large"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg>`,
                isIconAfterHeader: true
              }
            },
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
          ],
          plugins: [
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
            `gatsby-remark-copy-linked-files`,
            {
              resolve: `gatsby-remark-autolink-headers`,
              options: {
                icon: `<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation" title="fontSize large"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg>`,
                isIconAfterHeader: true
              }
            }
          ]
        }
      }
    ]
  };
};
