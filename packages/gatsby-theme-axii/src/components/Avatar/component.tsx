import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import { AvatarData } from "./interfaces";
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

const Avatar: React.FC = props => {
  const classes = useStyles();
  const data: AvatarData = useStaticQuery(query);

  return (
    <Img
      fluid={data.file.childImageSharp.fluid}
      className={classes.avatar}
      {...props}
    />
  );
};

export default Avatar;
