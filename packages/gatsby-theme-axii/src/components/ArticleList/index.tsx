import List from "@material-ui/core/List";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ArticleListItem from "../shared/ArticleListItem";
import useAllArticlesStyles from "./styles";

const query = graphql`
  {
    allArticle(sort: { order: DESC, fields: date }) {
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

const ArticleListPage: React.FC = () => {
  const classes = useAllArticlesStyles();
  const articles = useStaticQuery(query);

  return (
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
  );
};

export default ArticleListPage;
