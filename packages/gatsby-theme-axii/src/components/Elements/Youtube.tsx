/** @jsx jsx */
import { Box } from "@chakra-ui/core";
import { jsx } from "@emotion/core";
import React from "react";
import YouTube from "react-youtube";

export const youtube: React.FC = props => {
  return (
    <Box
      my="3em"
      position="relative"
      paddingBottom="56.25%"
      height="0"
      overflow="hidden"
      maxWidth="100%"
      css={{
        iframe: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }
      }}
    >
      <YouTube {...props} />
    </Box>
  );
};
