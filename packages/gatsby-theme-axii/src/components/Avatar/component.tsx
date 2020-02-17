import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import { AvatarData, AvatarStyle } from "./interfaces";
import useStyles from "./styles";

const query = graphql`
  query {
    file(relativePath: { eq: "avatar.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const Avatar: React.FC<AvatarStyle> = ({
  marginBottom = 0,
  marginTop = 0,
  ...rest
}) => {
  const classes = useStyles({ marginBottom, marginTop });
  const data: AvatarData = useStaticQuery(query);

  return (
    <Img
      fluid={data.file.childImageSharp.fluid}
      className={classes.avatar}
      {...rest}
    />
  );
};

export default Avatar;
