import { Flex, IconButton, Stack, useColorMode } from "@chakra-ui/core";
import { Link } from "gatsby";
import React from "react";
import { FaBlog, FaHome } from "react-icons/fa";

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex align="center" justifyContent="space-between" py={8} px={5}>
      <Link to="/">
        <IconButton icon={FaHome} aria-label="Blog" mr={2} size="lg" />
      </Link>
      <Stack isInline>
        <Link to="/blog">
          <IconButton icon={FaBlog} aria-label="Blog" mr={2} size="lg" />
        </Link>
        <span onClick={toggleColorMode}>
          {colorMode === "light" ? (
            <IconButton icon="moon" aria-label="Dark mode" mr={2} size="lg" />
          ) : (
            <IconButton icon="sun" aria-label="Light mode" mr={2} size="lg" />
          )}
        </span>
      </Stack>
    </Flex>
  );
};

export default Header;
