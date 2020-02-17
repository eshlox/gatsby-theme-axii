import Button from "@material-ui/core/Button";
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
      comment on twitter
    </Button>
  );
};

export default TwitterComments;
