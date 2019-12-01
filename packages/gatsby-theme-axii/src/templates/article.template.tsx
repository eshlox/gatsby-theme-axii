/** @jsx jsx */
import { Box, Heading, Text } from "@chakra-ui/core";
import { jsx } from "@emotion/core";
import { graphql } from "gatsby";
import { Disqus } from "gatsby-plugin-disqus";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Seo from "../components/SEO";
import Support from "../components/Support";
import Layout from "../layouts";
import PostPageProps from "./interfaces";
import articleStyles from "./styles";

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
      }
    }
  }
`;

const PostTemplate = ({ data: { article, site } }: PostPageProps) => {
  const disqusConfig = {
    identifier: article.slug,
    title: article.title,
    url: `${site.siteMetadata.siteUrl + article.slug}`
  };

  return (
    <Layout>
      <Seo
        title={article.title}
        url={disqusConfig.url}
        description={article.excerpt}
        pathname={article.slug}
        language={article.language}
      />

      <Box
        maxWidth="1024px"
        mx="auto"
        p={5}
        textAlign="center"
        wordBreak="break-word"
      >
        <Text fontStyle="italic" fontSize="sm">
          {article.date}
        </Text>

        <Heading as="h1" fontSize="5xl">
          {article.title}
        </Heading>
      </Box>

      <Box maxWidth="1024px" p={5} mx="auto" css={{ ...articleStyles }}>
        <MDXRenderer>{article.body}</MDXRenderer>
      </Box>

      <Support />

      {article.comments ? (
        <Box maxWidth="1024px" p={5} my={5} mx="auto">
          <Disqus config={disqusConfig} />
        </Box>
      ) : null}
    </Layout>
  );
};

export default PostTemplate;
