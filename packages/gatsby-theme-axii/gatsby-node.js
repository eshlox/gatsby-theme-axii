const path = require("path");
const slugify = require("slugify");

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const [year, month, day] = node.frontmatter.date
      .match(/\d{4}-\d{2}-\d{2}/)[0]
      .split("-");

    const permalink =
      node.frontmatter.slug ||
      slugify(node.frontmatter.title, {
        lower: true
      });

    const slug = `/${year}/${month}/${day}/${permalink}`;

    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const posts = result.data.allMdx.edges;

  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(
        `${__dirname}/src/templates/article.template.tsx`
      ),

      context: { slug: node.fields.slug }
    });
  });
};
