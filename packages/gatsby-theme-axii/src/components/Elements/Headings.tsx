/** @jsx jsx */
import { Heading } from "@chakra-ui/core";
import { jsx } from "@emotion/core";
import React from "react";

const headerLinkStyles = {
  "a.anchor": {
    svg: {
      display: "inline-block"
    }
  }
};

export const h1: React.FC = props => {
  return (
    <Heading
      as="h1"
      fontSize="5xl"
      my="1em"
      css={{ ...headerLinkStyles }}
      {...props}
    ></Heading>
  );
};

export const h2: React.FC = props => {
  return (
    <Heading
      as="h2"
      fontSize="3xl"
      my="1em"
      css={{ ...headerLinkStyles }}
      {...props}
    ></Heading>
  );
};

export const h3: React.FC = props => {
  return (
    <Heading
      as="h3"
      fontSize="xl"
      my="1em"
      css={{ ...headerLinkStyles }}
      {...props}
    ></Heading>
  );
};

export const h4: React.FC = props => {
  return (
    <Heading
      as="h4"
      fontSize="lg"
      my="1em"
      css={{ ...headerLinkStyles }}
      {...props}
    ></Heading>
  );
};

export const h5: React.FC = props => {
  return (
    <Heading
      as="h5"
      fontSize="md"
      my="1em"
      css={{ ...headerLinkStyles }}
      {...props}
    ></Heading>
  );
};

export const h6: React.FC = props => {
  return (
    <Heading
      as="h6"
      fontSize="sm"
      my="1em"
      css={{ ...headerLinkStyles }}
      {...props}
    ></Heading>
  );
};
