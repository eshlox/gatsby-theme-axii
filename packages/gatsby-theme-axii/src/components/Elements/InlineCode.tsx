import { Code } from "@chakra-ui/core";
import React from "react";

export const inlineCode: React.FunctionComponent = props => {
  return <Code variantColor="orange" fontSize="0.84em" {...props} />;
};
