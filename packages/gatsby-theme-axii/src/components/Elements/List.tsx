import { Box } from "@chakra-ui/core";
import React from "react";

export const ul: React.FunctionComponent = props => {
  return <Box as="ul" pt="8px" pl="16px" {...props} />;
};

export const ol: React.FunctionComponent = props => {
  return <Box as="ol" pt="8px" pl="16px" {...props} />;
};

export const li: React.FunctionComponent = props => {
  return <Box as="li" pb="4px" {...props} />;
};
