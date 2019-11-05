import {
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement
} from "@chakra-ui/core";
import React from "react";
import { FaFilter } from "react-icons/fa";

const SearchInput = ({ currentRefinement, refine, showFilters }) => {
  return (
    <Flex>
      <InputGroup flex="1">
        <InputLeftElement children={<Icon name="search" color="gray.300" />} />
        <Input
          type="search"
          placeholder="Search..."
          value={currentRefinement}
          onChange={event => refine(event.currentTarget.value)}
        />
        <IconButton
          aria-label="Additional filters"
          icon={FaFilter}
          ml="2px"
          onClick={showFilters}
        />
      </InputGroup>
    </Flex>
  );
};

export default SearchInput;
