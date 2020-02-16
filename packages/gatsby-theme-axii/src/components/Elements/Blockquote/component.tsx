import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import Alert from "@material-ui/lab/Alert";
import React from "react";
import useStyles from "./styles";

const blockquote: React.FC<{
  className?: string;
  children: JSX.Element;
}> = props => {
  const classes = useStyles();

  if (props.className === "twitter-tweet") {
    return (
      <Container
        component="blockquote"
        maxWidth="md"
        className={classes.root}
        {...props}
      ></Container>
    );
  }

  return (
    <Container component="blockquote" maxWidth="md" className={classes.root}>
      <Alert icon={<FormatQuoteIcon fontSize="inherit" />} severity="info">
        <Typography variant="body1">{props.children.props.children}</Typography>
      </Alert>
    </Container>
  );
};

export default blockquote;
