import { Link } from "@material-ui/core";
import { Variant } from "@material-ui/core/styles/createTypography";
import Typography from "@material-ui/core/Typography";
import React, { ElementType } from "react";
import generateSlug from "./slug";
import useStyles from "./styles";

const renderHeading = (
  children: React.ReactNode,
  variant: Variant,
  component: ElementType<any>
) => {
  const classes = useStyles();
  const slug = generateSlug(children);

  if (!slug) {
    return (
      <Typography variant={variant} component={component}>
        {children}
      </Typography>
    );
  }

  return (
    <Typography variant={variant} component={component} id={slug}>
      {children}{" "}
      <Link className={classes.link} href={`#${slug}`}>
        #
      </Link>
    </Typography>
  );
};

export default renderHeading;
