import { Box, Flex, PseudoBox, useColorMode } from "@chakra-ui/core";
import React from "react";
import { h1 as H1 } from "../Elements";
import SectionProps from "./interfaces";

const Section: React.FC = ({ children }: SectionProps) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.100", dark: "whiteAlpha.100" };

  return (
    <PseudoBox
      as={Flex}
      alignItems="center"
      minHeight="70vh"
      justifyContent="center"
      _odd={{ bg: bgColor[colorMode] }}
    >
      <Box maxWidth="1024px" pt={8} px={5}>
        <H1>{children}</H1>
      </Box>
    </PseudoBox>
  );
};

export default Section;
