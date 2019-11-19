const path = require("path");
const queries = require("./src/utils/algolia");

module.exports = options => {
  const { siteMetadata } = options;

  return {
    siteMetadata,
    plugins: [
      `gatsby-plugin-twitter`,
      `gatsby-plugin-typescript`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: siteMetadata.manifest.name,
          short_name: siteMetadata.manifest.short_name,
          start_url: `/`,
          background_color: `#ffffff`,
          theme_color: `#000000`,
          display: `standalone`,
          icon: `src/images/icon.png`
        }
      },
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
          path: path.resolve(__dirname, `src/pages`)
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `src/images`
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: path.resolve(__dirname, `src/images`)
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
      {
        resolve: `gatsby-plugin-disqus`,
        options: {
          shortname: siteMetadata.comments.disqus.shortname
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
            {
              resolve: "gatsby-remark-autolink-headers",
              options: {
                icon: `<svg viewBox="0 0 24 24" focusable="false" role="presentation" class="css-ivr09j"><g fill="currentColor"><path d="M10.458,18.374,7.721,21.11a2.853,2.853,0,0,1-3.942,0l-.892-.891a2.787,2.787,0,0,1,0-3.941l5.8-5.8a2.789,2.789,0,0,1,3.942,0l.893.892A1,1,0,0,0,14.94,9.952l-.893-.892a4.791,4.791,0,0,0-6.771,0l-5.8,5.8a4.787,4.787,0,0,0,0,6.77l.892.891a4.785,4.785,0,0,0,6.771,0l2.736-2.735a1,1,0,1,0-1.414-1.415Z"></path><path d="M22.526,2.363l-.892-.892a4.8,4.8,0,0,0-6.77,0l-2.905,2.9a1,1,0,0,0,1.414,1.414l2.9-2.9a2.79,2.79,0,0,1,3.941,0l.893.893a2.786,2.786,0,0,1,0,3.942l-5.8,5.8a2.769,2.769,0,0,1-1.971.817h0a2.766,2.766,0,0,1-1.969-.816,1,1,0,1,0-1.415,1.412,4.751,4.751,0,0,0,3.384,1.4h0a4.752,4.752,0,0,0,3.385-1.4l5.8-5.8a4.786,4.786,0,0,0,0-6.771Z"></path></g></svg>`
              }
            },
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
            {
              resolve: "gatsby-remark-autolink-headers",
              options: {
                icon: `<svg viewBox="0 0 24 24" focusable="false" role="presentation" class="css-ivr09j"><g fill="currentColor"><path d="M10.458,18.374,7.721,21.11a2.853,2.853,0,0,1-3.942,0l-.892-.891a2.787,2.787,0,0,1,0-3.941l5.8-5.8a2.789,2.789,0,0,1,3.942,0l.893.892A1,1,0,0,0,14.94,9.952l-.893-.892a4.791,4.791,0,0,0-6.771,0l-5.8,5.8a4.787,4.787,0,0,0,0,6.77l.892.891a4.785,4.785,0,0,0,6.771,0l2.736-2.735a1,1,0,1,0-1.414-1.415Z"></path><path d="M22.526,2.363l-.892-.892a4.8,4.8,0,0,0-6.77,0l-2.905,2.9a1,1,0,0,0,1.414,1.414l2.9-2.9a2.79,2.79,0,0,1,3.941,0l.893.893a2.786,2.786,0,0,1,0,3.942l-5.8,5.8a2.769,2.769,0,0,1-1.971.817h0a2.766,2.766,0,0,1-1.969-.816,1,1,0,1,0-1.415,1.412,4.751,4.751,0,0,0,3.384,1.4h0a4.752,4.752,0,0,0,3.385-1.4l5.8-5.8a4.786,4.786,0,0,0,0-6.771Z"></path></g></svg>`
              }
            }
          ]
        }
      }
    ]
  };
};
