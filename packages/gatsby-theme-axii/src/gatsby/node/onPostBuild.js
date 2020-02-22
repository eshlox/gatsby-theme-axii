module.exports = async ({ graphql }) => {
  const result = await graphql(`
    query {
      allArticle {
        edges {
          node {
            slug
            title
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            site
          }
        }
      }
      file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fixed(base64Width: 100) {
            base64
          }
        }
      }
    }
  `);

  const posts = result.data.allArticle.edges.map(node => ({
    title: node.title,
    slug: node.slug
  }));

  const { name, site } = result.data.site.siteMetadata;

  await generateOgImages(
    posts,
    name,
    site,
    result.data.file.childImageSharp.fixed.base64
  );
};
