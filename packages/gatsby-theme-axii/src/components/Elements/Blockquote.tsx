import { Callout, useColorMode } from "@chakra-ui/core";
import React from "react";

export const blockquote: React.FunctionComponent = props => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.100", dark: "whiteAlpha.100" };

  return (
    <Callout
      variant="left-accent"
      status="info"
      bg={bgColor[colorMode]}
      my="3em"
      fontStyle="italic"
      {...props}
    />
  );
};
