import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import useStyles from "./styles";

const p: React.FC<{ children: JSX.Element }> = props => {
  const classes = useStyles();

  // Image - full width
  if (props.children.props && props.children.props.originalType === "img") {
    return <Box className={classes.image} {...props} />;
  }

  // Iframe
  if (props.children.props && props.children.props.originalType === "iframe") {
    return <Container maxWidth="md" className={classes.iframe} {...props} />;
  }

  // Twitter
  if (
    props.children.props &&
    props.children.props.className === "twitter-tweet"
  ) {
    return <Container maxWidth="md" className={classes.twitter} {...props} />;
  }

  // Gatsby Image
  if (
    props.children.props &&
    props.children.props.className === "gatsby-resp-image-wrapper"
  ) {
    return <Box {...props} />;
  }

  return (
    <Typography
      className={classes.paragraph}
      component={Container}
      maxWidth="md"
      {...props}
    />
  );
};

export default p;
