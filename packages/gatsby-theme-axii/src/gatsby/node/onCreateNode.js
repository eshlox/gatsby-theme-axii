const crypto = require(`crypto`);
const slugify = require("slugify");

module.exports = ({ node, actions, createNodeId }) => {
  const { createNode } = actions;

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

    const fieldData = {
      slug,
      title: node.frontmatter.title,
      date: node.frontmatter.date,
      hero: node.frontmatter.hero,
      language: node.frontmatter.language,
      comments: node.frontmatter.comments !== false,
      categories: node.frontmatter.categories,
      tags: node.frontmatter.tags
    };

    createNode({
      ...fieldData,
      id: createNodeId(`${node.id} >>> Article`),
      parent: node.id,
      children: [],
      internal: {
        type: `Article`,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(fieldData))
          .digest(`hex`)
      }
    });
  }
};
