import { Box } from "@chakra-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import AvatarProps from "./interfaces";

const query = graphql`
  query {
    file(relativePath: { eq: "avatar.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const Avatar: React.FC = () => {
  const data: AvatarProps = useStaticQuery(query);

  return (
    <Box width={["200px", "300px", "400px"]} height="auto">
      <Img fluid={data.file.childImageSharp.fluid} />
    </Box>
  );
};

export default Avatar;
