import Box from "@material-ui/core/Box";
import React from "react";
import useStyles from "./styles";

const pre: React.FC<{ children: JSX.Element }> = (props) => {
  const classes = useStyles();

  if (props.children?.props?.className?.startsWith("language-")) {
    return props.children;
  }

  return (
    <Box component="pre" className={classes.root}>
      {props.children.props.children}
    </Box>
  );
};

export default pre;
