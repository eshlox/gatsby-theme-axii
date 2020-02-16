import { Container } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

export const h1: React.FC = props => {
  const classes = useStyles();

  return (
    <Container component="h1" className={classes.h1} {...props} maxWidth="md" />
  );
};

export const h2: React.FC = props => {
  const classes = useStyles();

  return (
    <Container component="h2" className={classes.h2} {...props} maxWidth="md" />
  );
};

export const h3: React.FC = props => {
  const classes = useStyles();

  return (
    <Container component="h3" className={classes.h3} {...props} maxWidth="md" />
  );
};

export const h4: React.FC = props => {
  const classes = useStyles();

  return (
    <Container component="h4" className={classes.h4} {...props} maxWidth="md" />
  );
};

export const h5: React.FC = props => {
  const classes = useStyles();

  return (
    <Container component="h5" className={classes.h5} {...props} maxWidth="md" />
  );
};

export const h6: React.FC = props => {
  const classes = useStyles();

  return (
    <Container component="h6" className={classes.h6} {...props} maxWidth="md" />
  );
};
