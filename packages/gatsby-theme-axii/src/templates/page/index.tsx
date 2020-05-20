import Box from "@material-ui/core/Box";
import React from "react";
import useStyles from "../../styles/markdown";

const PageTemplate: React.FC = (props) => {
  const classes = useStyles();

  return (
    <Box component="article" className={classes.markdown}>
      {props.children}
    </Box>
  );
};

export default PageTemplate;
