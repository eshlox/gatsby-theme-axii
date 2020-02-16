import { Box } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const iframe: React.FC = props => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <iframe {...props} />
    </Box>
  );
};

export default iframe;
