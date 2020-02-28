import { Link } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import React, { ReactNode } from "react";
import useStyles from "./styles";
const slugger = require("github-slugger").slug;

const generateSlug = (children: ReactNode): string | undefined => {
  if (typeof children === "string") {
    return slugger(children);
  }

  if (Array.isArray(children)) {
    const title = children.find(child => typeof child === "string");

    if (!title) {
      return undefined;
    }

    return slugger(title);
  }

  return undefined;
};

export const h1: React.FC = props => {
  const classes = useStyles();
  const { children, ...rest } = props;
  const slug = generateSlug(children);

  if (!slug) {
    return (
      <Container component="h1" className={classes.h1} maxWidth="md" {...rest}>
        {children}
      </Container>
    );
  }

  return (
    <Container
      component="h1"
      className={classes.h1}
      {...rest}
      maxWidth="md"
      id={slug}
    >
      <Link color="inherit" href={`#${slug}`}>
        {children}
      </Link>
    </Container>
  );
};

export const h2: React.FC = props => {
  const classes = useStyles();
  const { children, ...rest } = props;
  const slug = generateSlug(children);

  if (!slug) {
    return (
      <Container component="h2" className={classes.h2} maxWidth="md" {...rest}>
        {children}
      </Container>
    );
  }

  return (
    <Container
      component="h2"
      className={classes.h2}
      {...rest}
      maxWidth="md"
      id={slug}
    >
      <Link color="inherit" href={`#${slug}`}>
        {children}
      </Link>
    </Container>
  );
};

export const h3: React.FC = props => {
  const classes = useStyles();
  const { children, ...rest } = props;
  const slug = generateSlug(children);

  if (!slug) {
    return (
      <Container component="h3" className={classes.h3} maxWidth="md" {...rest}>
        {children}
      </Container>
    );
  }

  return (
    <Container
      component="h3"
      className={classes.h3}
      {...rest}
      maxWidth="md"
      id={slug}
    >
      <Link color="inherit" href={`#${slug}`}>
        {children}
      </Link>
    </Container>
  );
};

export const h4: React.FC = props => {
  const classes = useStyles();
  const { children, ...rest } = props;
  const slug = generateSlug(children);

  if (!slug) {
    return (
      <Container component="h4" className={classes.h4} maxWidth="md" {...rest}>
        {children}
      </Container>
    );
  }

  return (
    <Container
      component="h4"
      className={classes.h4}
      {...rest}
      maxWidth="md"
      id={slug}
    >
      <Link color="inherit" href={`#${slug}`}>
        {children}
      </Link>
    </Container>
  );
};

export const h5: React.FC = props => {
  const classes = useStyles();
  const { children, ...rest } = props;
  const slug = generateSlug(children);

  if (!slug) {
    return (
      <Container component="h5" className={classes.h5} maxWidth="md" {...rest}>
        {children}
      </Container>
    );
  }

  return (
    <Container
      component="h5"
      className={classes.h5}
      {...rest}
      maxWidth="md"
      id={slug}
    >
      <Link color="inherit" href={`#${slug}`}>
        {children}
      </Link>
    </Container>
  );
};

export const h6: React.FC = props => {
  const classes = useStyles();
  const { children, ...rest } = props;
  const slug = generateSlug(children);

  if (!slug) {
    return (
      <Container component="h6" className={classes.h6} maxWidth="md" {...rest}>
        {children}
      </Container>
    );
  }

  return (
    <Container
      component="h6"
      className={classes.h6}
      {...rest}
      maxWidth="md"
      id={slug}
    >
      <Link color="inherit" href={`#${slug}`}>
        {children}
      </Link>
    </Container>
  );
};
