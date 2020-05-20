import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import React from "react";
import ArticleListItem from "../../../src/components/shared/ArticleListItem";
import useAllArticlesStyles from "./styles";

const query = graphql`
  {
    allArticle {
      edges {
        node {
          objectID: id
          slug
          title
          date(formatString: "YYYY-MM-DD")
        }
      }
    }
  }
`;

const AllArticlesPage: React.FC = () => {
  const classes = useAllArticlesStyles();
  const articles = useStaticQuery(query);

  return (
    <Box>
      <GatsbySeo title="Blog - all articles" />

      <List className={classes.list}>
        {articles.allArticle.edges.map((edge: any) => (
          <ArticleListItem
            key={edge.node.objectID}
            slug={edge.node.slug}
            title={edge.node.title}
            date={edge.node.date}
          />
        ))}
      </List>
    </Box>
  );
};

export default AllArticlesPage;
