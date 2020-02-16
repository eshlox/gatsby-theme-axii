import { Button } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import React from "react";
import useStyles from "./styles";

const TwitterComments: React.FC<{ className: string; url: string }> = props => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="primary"
      className={`${props.className} ${classes.button}`}
      startIcon={<TwitterIcon />}
      href={`https://mobile.twitter.com/search?q=${props.url}`}
      target="_blank"
    >
      Comment on Twitter!
    </Button>
  );
};

export default TwitterComments;
