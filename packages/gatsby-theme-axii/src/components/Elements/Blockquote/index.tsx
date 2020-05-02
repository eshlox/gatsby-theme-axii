import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import Alert from "@material-ui/lab/Alert";
import React from "react";
import useStyles from "./styles";

const blockquote: React.FC<{
  className?: string;
  children: JSX.Element;
}> = (props) => {
  const classes = useStyles();

  if (props.className === "twitter-tweet") {
    return <Box component="blockquote" {...props} />;
  }

  return (
    <Alert
      component="blockquote"
      icon={<FormatQuoteIcon fontSize="inherit" />}
      severity="info"
      className={classes.root}
    >
      <Typography variant="body1">{props.children.props.children}</Typography>
    </Alert>
  );
};

export default blockquote;
