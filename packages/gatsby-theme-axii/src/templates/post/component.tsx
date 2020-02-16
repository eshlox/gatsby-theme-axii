import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Disqus from "disqus-react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React, { useState } from "react";
import Seo from "../../components/SEO";
import Support from "../../components/Support";
import TwitterComments from "../../components/TwitterComments";
import Layout from "../../layouts";
import PostPageProps from "./interfaces";
import useStyles from "./styles";

export const pageQuery = graphql`
  query BlogPostQuery($slug: String) {
    article(slug: { eq: $slug }) {
      slug
      title
      date(formatString: "MMMM Do, YYYY")
      language
      comments
      body
      excerpt(pruneLength: 200)
    }
    site {
      siteMetadata {
        siteUrl
        siteTitle
        siteDescription
        author {
          name
        }
        comments {
          disqus {
            shortname
          }
        }
      }
    }
  }
`;

const PostTemplate = ({ data: { article, site } }: PostPageProps) => {
  const classes = useStyles();
  const [disqusDisplayed, setDisqusDisplayed] = useState(false);
  const pageUrl = `${site.siteMetadata.siteUrl + article.slug}`;

  const disqusConfig = {
    identifier: article.slug,
    title: article.title,
    url: pageUrl
  };

  return (
    <Layout>
      <Seo
        title={article.title}
        url={pageUrl}
        description={article.excerpt}
        pathname={article.slug}
        language={article.language}
      />

      <Container maxWidth="md" className={classes.header}>
        <Typography>{article.date}</Typography>
        <Typography variant="h2" component="h1">
          {article.title}
        </Typography>
      </Container>

      <Box className={classes.body}>
        <MDXRenderer>{article.body}</MDXRenderer>
      </Box>

      <Container maxWidth="md">
        <TwitterComments
          className={classes.twitterComments}
          url={disqusConfig.url}
        />

        <Support className={classes.support} />

        {article.comments && !disqusDisplayed && (
          <Button
            variant="contained"
            size="large"
            className={classes.button}
            onClick={() => setDisqusDisplayed(true)}
          >
            load disqus comments
          </Button>
        )}

        {article.comments && disqusDisplayed ? (
          <Box m={6}>
            <Disqus.DiscussionEmbed
              shortname={site.siteMetadata.comments.disqus.shortname}
              config={disqusConfig}
            />
          </Box>
        ) : null}
      </Container>
    </Layout>
  );
};

export default PostTemplate;
