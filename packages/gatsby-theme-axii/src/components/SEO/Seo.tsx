import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import SeoProps from "./interfaces";

const seoQuery = graphql`
  {
    site {
      siteMetadata {
        siteUrl
        siteDescription
        siteTitle
        author {
          name
        }
        social {
          twitter {
            username
          }
        }
      }
    }
  }
`;

const Seo = ({
  url,
  title,
  description,
  image,
  language,
  children,
  pathname,
}: SeoProps) => {
  const results = useStaticQuery(seoQuery);
  const site = results.site.siteMetadata;

  const siteTitle = `${title || site.siteTitle} - ${site.author.name}`;
  const siteDescription = description || site.siteDescription;
  const twitterUsername = site.social.twitter.username;

  const fullURL = (pathname: string) =>
    pathname ? `${site.siteUrl}${pathname}` : site.siteUrl;

  const metaTags = [
    { charset: "utf-8" },
    {
      "http-equiv": "X-UA-Compatible",
      content: "IE=edge",
    },
    {
      rel: "canonical",
      href: fullURL(pathname),
    },
    { itemprop: "name", content: siteTitle },
    { itemprop: "description", content: siteDescription },
    { itemprop: "image", content: `${fullURL(pathname)}/card.jpg` },
    { name: "description", content: siteDescription },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: twitterUsername },
    { name: "twitter:title", content: siteTitle },
    { name: "twitter:description", content: siteDescription },
    { name: "twitter:creator", content: twitterUsername },
    { name: "twitter:image", content: `${fullURL(pathname)}/card.jpg` },

    { property: "og:title", content: siteTitle },
    { property: "og:url", content: url },
    { property: "og:image", content: `${fullURL(pathname)}/card.jpg` },
    { property: "og:width", content: 1200 },
    { property: "og:height", content: 630 },
    { property: "og:description", content: siteDescription },
  ];

  return (
    <Helmet
      title={siteTitle}
      htmlAttributes={{ lang: language || "en" }}
      meta={metaTags}
    >
      {children}
    </Helmet>
  );
};

export default Seo;
