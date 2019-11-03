import { Box } from "@chakra-ui/core";
import React from "react";
import SectionContainerProps from "./interfaces";

const SectionContainer: React.FC = ({ children }: SectionContainerProps) => {
  return <Box>{children}</Box>;
};

export default SectionContainer;
