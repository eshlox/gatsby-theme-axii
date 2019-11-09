import { Box, useColorMode } from "@chakra-ui/core";
import React from "react";

export const table = props => (
  <Box as="table" textAlign="left" my="3em" width="full" {...props} />
);

export const th = props => {
  const { colorMode } = useColorMode();
  const bg = { light: "gray.50", dark: "whiteAlpha.100" };

  return (
    <Box as="th" bg={bg[colorMode]} fontWeight="semibold" p={2} {...props} />
  );
};

export const td = props => (
  <Box
    as="td"
    p={2}
    borderTopWidth="1px"
    borderColor="inherit"
    whiteSpace="normal"
    {...props}
  />
);
