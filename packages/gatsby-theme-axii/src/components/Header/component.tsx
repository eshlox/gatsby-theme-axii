import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import HomeIcon from "@material-ui/icons/Home";
import TwitterIcon from "@material-ui/icons/Twitter";
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

const Header: React.FC<{
  isDark: boolean;
  changeTheme: Function;
}> = props => {
  const classes = useStyles();
  const data: HeaderQuery = useStaticQuery(query);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            aria-label="menu"
            color="primary"
            component={Link}
            to="/"
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} />
          <IconButton
            edge="start"
            aria-label="twitter"
            color="primary"
            href={data.site.siteMetadata.social.twitter.url}
          >
            <TwitterIcon />
          </IconButton>
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
            aria-label="dark mode"
            color="primary"
            onClick={() => props.changeTheme()}
          >
            {props.isDark ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
