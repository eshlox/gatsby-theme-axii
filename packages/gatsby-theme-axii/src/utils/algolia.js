const ISO6391 = require("iso-639-1");
const slugify = require("slugify");

const postQuery = `{
    allArticle {
      edges {
        node {
          objectID: id
          slug
          title
          date(formatString: "YYYY-MM-DD")
          tags
          categories
          language
        }
      }
    }
  }`;

const format = arr =>
  arr.map(post => {
    const postData = post.node;

    postData.language = ISO6391.getName(postData.language);

    if (postData.categories) {
      postData.categories = postData.categories.map(category =>
        slugify(category).toUpperCase()
      );
    }
    if (postData.tags) {
      postData.tags = postData.tags.map(tag => slugify(tag).toLowerCase());
    }

    return postData;
  });

const settings = {
  distinct: true,
  attributeForDistinct: "slug",
  attributesForFaceting: ["language", "tags", "categories"],
  searchableAttributes: ["title", "tags", "categories", "slug"],
  ranking: [
    "desc(date)",
    "typo",
    "geo",
    "words",
    "filters",
    "proximity",
    "attribute",
    "exact"
  ],
  customRanking: ["asc(title)"]
};

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => format(data.allArticle.edges),
    indexName: `Posts`,
    settings
  }
];

module.exports = queries;
