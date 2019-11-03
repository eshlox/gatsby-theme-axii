import { Box } from "@chakra-ui/core";
import React from "react";

export const pre: React.FunctionComponent = props => {
  return <Box as="pre" my="3em" rounded="sm" {...props} />;
};
