import { Box } from "@chakra-ui/core";
import React from "react";

export const hr: React.FunctionComponent = props => {
  return <Box as="hr" my="3em" {...props} />;
};
