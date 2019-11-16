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
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        language
      }
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

const PostTemplate = ({ data: { mdx, site } }: PostPageProps) => {
  const disqusConfig = {
    identifier: mdx.fields.slug,
    title: mdx.frontmatter.title,
    url: `${site.siteMetadata.siteUrl + mdx.fields.slug}`
  };

  return (
    <Layout>
      <Seo
        title={mdx.frontmatter.title}
        url={disqusConfig.url}
        description={mdx.excerpt}
        pathname={mdx.fields.slug}
        language={mdx.frontmatter.language}
      />

      <Box
        maxWidth="1024px"
        mx="auto"
        p={5}
        textAlign="center"
        wordBreak="break-word"
      >
        <Text fontStyle="italic" fontSize="sm">
          {mdx.frontmatter.date}
        </Text>

        <Heading as="h1" fontSize="5xl">
          {mdx.frontmatter.title}
        </Heading>
      </Box>

      <Box maxWidth="1024px" p={5} mx="auto" css={{ ...articleStyles }}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </Box>

      <Support />

      <Box maxWidth="1024px" p={5} my={5} mx="auto">
        <Disqus config={disqusConfig} />
      </Box>
    </Layout>
  );
};

export default PostTemplate;
