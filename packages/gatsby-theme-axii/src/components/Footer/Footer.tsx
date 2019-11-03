import { Box, Flex, IconButton, Stack } from "@chakra-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaRss,
  FaTelegram,
  FaTwitter
} from "react-icons/fa";
import FooterProps from "./interfaces";

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

const Footer: React.FC = () => {
  const data: FooterProps = useStaticQuery(query);
  const {
    site: {
      siteMetadata: {
        author: { email, name },
        social: { twitter, telegram, github, linkedin }
      }
    }
  } = data;

  const mailto = (email: string): string => `mailto:${email}`;
  const currentYear = () => new Date().getFullYear();

  return (
    <Flex
      align="center"
      justifyContent="space-between"
      py={8}
      px={5}
      flexDirection={["column-reverse", "column-reverse", "row"]}
    >
      <Box>
        &copy; {currentYear()} {name}
      </Box>
      <Stack mb={[3, 3, 0]} isInline>
        {email ? (
          <a href={mailto(email)}>
            <IconButton icon={FaEnvelope} aria-label="E-mail address" mr={2} />
          </a>
        ) : null}
        {telegram ? (
          <a href={telegram.url}>
            <IconButton icon={FaTelegram} aria-label="Telegram" mr={2} />
          </a>
        ) : null}
        {github ? (
          <a href={github.url}>
            <IconButton icon={FaGithub} aria-label="Github" mr={2} />
          </a>
        ) : null}
        {twitter ? (
          <a href={twitter.url}>
            <IconButton icon={FaTwitter} aria-label="Twitter" mr={2} />
          </a>
        ) : null}
        {linkedin ? (
          <a href={linkedin.url}>
            <IconButton icon={FaLinkedin} aria-label="Linkedin" mr={2} />
          </a>
        ) : null}
        <a href="rss.xml">
          <IconButton icon={FaRss} aria-label="RSS" mr={2} />
        </a>
      </Stack>
    </Flex>
  );
};

export default Footer;
