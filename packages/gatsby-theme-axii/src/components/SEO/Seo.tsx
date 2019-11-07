import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
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
  pathname
}: SeoProps) => {
  const results = useStaticQuery(seoQuery);
  const site = results.site.siteMetadata;

  const siteTitle = `${title || site.siteTitle} - ${site.author.name}`;
  const siteDescription = description || site.description;
  const twitterUsername = site.social.twitter.username;

  const fullURL = (path: string) =>
    path ? `${site.siteUrl}${path}` : site.siteUrl;

  const metaTags = [
    { charset: "utf-8" },
    {
      "http-equiv": "X-UA-Compatible",
      content: "IE=edge"
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    },
    {
      rel: "canonical",
      href: fullURL(pathname)
    },
    { itemprop: "name", content: siteTitle },
    { itemprop: "description", content: siteDescription },
    { itemprop: "image", content: fullURL(image) },
    { name: "description", content: siteDescription },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: twitterUsername },
    { name: "twitter:title", content: siteTitle },
    { name: "twitter:description", content: siteDescription },
    { name: "twitter:creator", content: twitterUsername },
    {
      name: "twitter:image",
      content: fullURL(image)
    },

    { property: "og:title", content: siteTitle },
    { property: "og:url", content: url },
    { property: "og:image", content: fullURL(image) },
    { property: "og:description", content: siteDescription }
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
