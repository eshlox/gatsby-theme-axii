import React from "react";
import useStyles from "./styles";

const inlineCode: React.FC = props => {
  const classes = useStyles();

  return <code className={classes.root} {...props} />;
};

export default inlineCode;
