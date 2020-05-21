import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TwitterIcon from "@material-ui/icons/Twitter";
import clsx from "clsx";
import Disqus from "disqus-react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import React, { useState } from "react";
import Support from "../../components/SupportButton";
import useMarkdownStyles from "../../styles/markdown";
import { Article, PostPageProps } from "./interfaces";
import useStyles from "./styles";
import { formatDate } from "./utils";

export const pageQuery = graphql`
  query BlogPostQuery($slug: String) {
    article(slug: { eq: $slug }) {
      slug
      title
      date(formatString: "YYYY-MM-DD")
      language
      comments
      body
      tags
      categories
      excerpt(pruneLength: 200)
      parent {
        parent {
          ... on File {
            fields {
              gitLogLatestDate(formatString: "YYYY-MM-DD")
            }
          }
        }
      }
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

const PostTemplate: React.FC<PostPageProps> = ({
  data: { article, site },
}: PostPageProps) => {
  const classes = useStyles();
  const markdownClasses = useMarkdownStyles();
  const className = clsx(markdownClasses.markdown, classes.body);
  const [disqusDisplayed, setDisqusDisplayed] = useState(false);
  const pageUrl = `${site.siteMetadata.siteUrl + article.slug}`;

  const disqusConfig = {
    identifier: article.slug,
    title: article.title,
    url: pageUrl,
  };

  const shouldDisplayModifiedDate = (article: Article): boolean => {
    return article.parent.parent.fields.gitLogLatestDate !== article.date;
  };

  return (
    <Box>
      <GatsbySeo
        title={article.title}
        canonical={pageUrl}
        description={article.excerpt}
        language={article.language}
        openGraph={{
          type: "article",
          article: {
            tags: article.tags,
            publishedTime: article.date,
            modifiedTime: article.parent.parent.fields.gitLogLatestDate,
            section: article.categories[0],
          },
          images: [
            {
              url: `${site.siteMetadata.siteUrl}/og-article.png`,
              width: 1200,
              height: 630,
            },
          ],
        }}
      />

      <Box className={classes.header}>
        <Typography title="published">{formatDate(article.date)}</Typography>
        {shouldDisplayModifiedDate(article) && (
          <Typography title="updated" variant="body2" color="textSecondary">
            {formatDate(article.parent.parent.fields.gitLogLatestDate)}
          </Typography>
        )}
        <Typography variant="h1" component="h1">
          {article.title}
        </Typography>
      </Box>

      <Box className={className}>
        <MDXRenderer>{article.body}</MDXRenderer>
      </Box>

      <Box>
        <Button
          variant="contained"
          color="primary"
          className={classes.twitterComments}
          startIcon={<TwitterIcon />}
          href={`https://mobile.twitter.com/search?q=${disqusConfig.url}`}
          target="_blank"
          rel="noreferrer"
          fullWidth
        >
          comment on twitter
        </Button>

        <Support className={classes.support} />

        {article.comments && !disqusDisplayed && (
          <Button
            variant="contained"
            onClick={() => setDisqusDisplayed(true)}
            fullWidth
          >
            load disqus comments
          </Button>
        )}

        {article.comments && disqusDisplayed ? (
          <Box className={classes.disqus}>
            <Disqus.DiscussionEmbed
              shortname={site.siteMetadata.comments.disqus.shortname}
              config={disqusConfig}
            />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default PostTemplate;
