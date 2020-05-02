import Grid from "@material-ui/core/Grid";
import React from "react";
import { PoweredBy as AlgoliaPoweredBy } from "react-instantsearch-dom";
import useStyles from "./styles";

const PoweredBy: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      component={AlgoliaPoweredBy}
      className={classes.root}
    />
  );
};

export default PoweredBy;
