import { Text } from "@chakra-ui/core";
import React from "react";

export const p: React.FunctionComponent = props => {
  return (
    <Text as="p" fontSize="lg" lineHeight="tall" my="1em" {...props}></Text>
  );
};
