const chunk = require("chunk-text");
const iso6391 = require("iso-639-1");
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
          excerpt(pruneLength: 1000000)
        }
      }
    }
  }`;

const format = (arr) =>
  arr.map((post) => {
    const { excerpt, ...postData } = post.node;

    postData.language = iso6391.getName(postData.language);

    if (postData.categories) {
      postData.categories = postData.categories.map((category) =>
        slugify(category).toUpperCase()
      );
    }

    if (postData.tags) {
      postData.tags = postData.tags.map((tag) => slugify(tag).toLowerCase());
    }

    const chunks = chunk(excerpt, 500).map((excerptChunk, index) => ({
      ...postData,
      objectID: `${postData.objectID}-${index}`,
      content: excerptChunk,
    }));

    return chunks;
  });

const settings = {
  distinct: true,
  attributeForDistinct: "slug",
  attributesForFaceting: ["language", "tags", "categories"],
  searchableAttributes: ["title", "content", "tags", "categories", "slug"],
  ranking: [
    "desc(date)",
    "typo",
    "geo",
    "words",
    "filters",
    "proximity",
    "attribute",
    "exact",
  ],
  customRanking: ["asc(title)"],
};

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => format(data.allArticle.edges).flat(),
    indexName: `Posts`,
    settings,
  },
];

module.exports = queries;
