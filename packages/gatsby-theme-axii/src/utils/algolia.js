const ISO6391 = require("iso-639-1");
const slugify = require("slugify");

const postQuery = `{
    posts: allMdx(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
    ) {
      edges {
        node {
          objectID: id
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
  }`;

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest
  }));

const format = arr =>
  arr.map(post => {
    post.language = ISO6391.getName(post.language);

    if (post.categories) {
      post.categories = post.categories.map(category =>
        slugify(category).toUpperCase()
      );
    }
    if (post.tags) {
      post.tags = post.tags.map(tag => slugify(tag).toLowerCase());
    }

    return post;
  });

const settings = {
  distinct: true,
  attributeForDistinct: "fields.slug",
  attributesForFaceting: ["language", "tags", "categories"],
  searchableAttributes: ["title", "tags", "categories", "fields.slug"],
  ranking: [
    "desc(date)",
    "typo",
    "geo",
    "words",
    "filters",
    "proximity",
    "attribute",
    "exact"
  ]
};

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => format(flatten(data.posts.edges)),
    indexName: `Posts`,
    settings
  }
];

module.exports = queries;
