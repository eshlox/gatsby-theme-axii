const path = require("path");
const queries = require("./src/utils/algolia");

module.exports = {
  plugins: [
    `gatsby-plugin-twitter`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `content/posts`,
        name: `posts`
      }
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.resolve(__dirname, `src/pages`)
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APPLICATION_ID,
        apiKey: process.env.ALGOLIA_ADMIN_API_KEY,
        queries,
        chunkSize: 10000 // default: 1000
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `axii-a-gatsby-theme`
      }
    },
    `gatsby-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
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
            serialize: ({ query: { site, posts } }) => {
              return posts.edges.map(edge => {
                return {
                  ...edge.node.frontmatter,
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  categories: [
                    ...edge.node.frontmatter.categories
                    // ...edge.node.frontmatter.tags what if null?
                  ]
                  // custom_elements: [{ "content:encoded": edge.node.body }],
                  // author: site.siteMetadata.name
                };
              });
            },
            query: `{
              posts: allMdx(
                filter: { fileAbsolutePath: { regex: "/posts/" } }
              ) {
                edges {
                  node {
                    excerpt
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date(formatString: "YYYY-MM-DD")
                      tags
                      categories
                      language
                    }
                  }
                }
              }
            }
              `,
            output: "/rss.xml"
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
          { resolve: `gatsby-remark-copy-linked-files` },
          { resolve: `gatsby-remark-autolink-headers` },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              quality: 80,
              linkImagesToOriginal: false,
              withWebp: true
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
          `gatsby-remark-images`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-autolink-headers`
        ]
      }
    }
  ]
};
