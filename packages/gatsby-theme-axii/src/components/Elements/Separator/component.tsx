import Divider from "@material-ui/core/Divider";
import React from "react";
import useStyles from "./styles";

const hr: React.FC = props => {
  const classes = useStyles();

  return <Divider className={classes.root} {...props} />;
};

export default hr;
