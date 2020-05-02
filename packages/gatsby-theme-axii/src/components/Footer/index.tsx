import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import TelegramIcon from "@material-ui/icons/Telegram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import FooterProps from "./interfaces";
import useStyles from "./styles";

const query = graphql`
  {
    site {
      siteMetadata {
        author {
          email
          name
        }
        social {
          twitter {
            url
          }
          github {
            url
          }
          linkedin {
            url
          }
          telegram {
            url
          }
        }
      }
    }
  }
`;

const Footer: React.FC<{ className: string }> = (props: {
  className: string;
}) => {
  const classes = useStyles();
  const currentYear = (): number => new Date().getFullYear();
  const mailto = (email: string): string => `mailto:${email}`;

  const { className, ...rest } = props;

  const data: FooterProps = useStaticQuery(query);
  const {
    site: {
      siteMetadata: {
        author: { email, name },
        social: { twitter, telegram, github, linkedin },
      },
    },
  } = data;

  return (
    <Grid
      container
      component="footer"
      className={`${classes.root} ${className}`}
      {...rest}
    >
      <Grid item sm={12} md={6} className={classes.copyright}>
        &copy; {currentYear()} {name}
      </Grid>
      <Grid item sm={12} md={6} className={classes.social}>
        {email ? (
          <a href={mailto(email)}>
            <IconButton color="primary" aria-label="E-mail address">
              <EmailIcon />
            </IconButton>
          </a>
        ) : null}
        {telegram ? (
          <a href={telegram.url}>
            <IconButton color="primary" aria-label="Telegram">
              <TelegramIcon />
            </IconButton>
          </a>
        ) : null}
        {github ? (
          <a href={github.url}>
            <IconButton color="primary" aria-label="Github">
              <GitHubIcon />
            </IconButton>
          </a>
        ) : null}
        {twitter ? (
          <a href={twitter.url}>
            <IconButton color="primary" aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
          </a>
        ) : null}
        {linkedin ? (
          <a href={linkedin.url}>
            <IconButton color="primary" aria-label="Linkedin">
              <LinkedInIcon />
            </IconButton>
          </a>
        ) : null}
        <a href="/rss.xml">
          <IconButton color="primary" aria-label="RSS">
            <RssFeedIcon />
          </IconButton>
        </a>
      </Grid>
    </Grid>
  );
};

export default Footer;
