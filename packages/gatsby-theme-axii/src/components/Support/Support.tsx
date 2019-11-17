import { Box, Flex, Link, useColorMode } from "@chakra-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import { h2 as H2 } from "../Elements/Headings";
import SupportProps from "./interfaces";

const query = graphql`
  query {
    file(relativePath: { eq: "buymeacoffee.png" }) {
      childImageSharp {
        fixed(width: 217, quality: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    site {
      siteMetadata {
        support {
          buymeacoffee {
            url
          }
        }
      }
    }
  }
`;

const Support: React.FC = props => {
  const data: SupportProps = useStaticQuery(query);
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.100", dark: "whiteAlpha.100" };

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      textAlign="center"
      py={24}
      bg={bgColor[colorMode]}
    >
      <Box maxWidth="1024px" mx="auto">
        <H2>Do you want to support me?</H2>
      </Box>
      <Box>
        <Link
          href={data.site.siteMetadata.support.buymeacoffee.url}
          target="_blank"
        >
          <Img fixed={data.file.childImageSharp.fixed} />
        </Link>
      </Box>
    </Flex>
  );
};

export default Support;
