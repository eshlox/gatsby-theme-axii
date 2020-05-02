import React from "react";
import useStyles from "../../styles/markdown";

const PageTemplate: React.FC = (props) => {
  const classes = useStyles();

  return <article className={classes.markdown}>{props.children}</article>;
};

export default PageTemplate;
