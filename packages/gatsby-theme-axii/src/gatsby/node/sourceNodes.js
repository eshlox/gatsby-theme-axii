module.exports = ({ actions }) => {
  actions.createTypes(`
      type Article implements Node {
        id: ID!
        slug: String!
        title: String!
        date: Date! @dateformat
        body: String!
        excerpt(pruneLength: Int = 140): String!
        language: String
        comments: Boolean
        categories: [String]
        tags: [String]
      }
    `);
};
