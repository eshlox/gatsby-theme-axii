import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import TwitterIcon from "@material-ui/icons/Twitter";
import clsx from "clsx";
import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import HeaderQuery from "./interfaces";
import useStyles from "./styles";

const query = graphql`
  {
    site {
      siteMetadata {
        social {
          twitter {
            url
          }
        }
      }
    }
  }
`;

const Header: React.FC<{ className: string }> = (props) => {
  const classes = useStyles();
  const data: HeaderQuery = useStaticQuery(query);
  const className = clsx(props.className, classes.appBar);

  return (
    <AppBar position="static" className={className}>
      <Toolbar>
        <IconButton
          edge="start"
          aria-label="home"
          color="primary"
          component={Link}
          to="/"
        >
          <HomeIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title} />
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/blog"
          className={classes.blogButton}
        >
          Blog
        </Button>
        <IconButton
          edge="start"
          aria-label="twitter"
          color="primary"
          href={data.site.siteMetadata.social.twitter.url}
        >
          <TwitterIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
