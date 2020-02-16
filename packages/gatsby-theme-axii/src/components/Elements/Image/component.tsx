import React from "react";
import useStyles from "./styles";

const img: React.FC<{ className?: string }> = props => {
  const classes = useStyles();

  if (props.className === "gatsby-resp-image-image") {
    return <img {...props} />;
  }

  return <img {...props} className={classes.root} />;
};

export default img;
