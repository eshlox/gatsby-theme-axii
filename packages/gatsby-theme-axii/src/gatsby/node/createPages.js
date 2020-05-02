const path = require("path");

module.exports = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allArticle {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨 ERROR: Loading "createPages" query');
  }

  const posts = result.data.allArticle.edges;

  posts.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`${__dirname}/../../templates/post/index.tsx`),
      context: { slug: node.slug },
    });
  });
};
