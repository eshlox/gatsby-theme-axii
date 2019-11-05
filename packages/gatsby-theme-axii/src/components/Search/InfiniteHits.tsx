import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  PseudoBox,
  Tag,
  Text
} from "@chakra-ui/core";
import { Link } from "gatsby";
import React from "react";

const InfiniteHits = ({ hits, hasMore, refineNext }) => (
  <Box>
    <Grid
      gridAutoRows="auto"
      gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      gridGap="1rem"
    >
      {hits.map(hit => (
        <PseudoBox
          key={hit.objectID}
          as={Link}
          to={hit.fields.slug}
          p={5}
          display="flex"
          shadow="md"
          borderWidth="1px"
          flexDirection="column"
          minHeight="250px"
          _hover={{ shadow: "lg" }}
          wordBreak="break-word"
          rounded="md"
        >
          <Text
            as="i"
            mb="1em"
            display="block"
            alignContent="center"
            fontSize="xs"
            color="grey"
          >
            {hit.date}
          </Text>
          <Heading fontSize="m" flex="1">
            {hit.title}
          </Heading>
          {(hit.categories || hit.tags) && (
            <Flex flexDirection="row" flexWrap="wrap">
              {hit.categories &&
                hit.categories.map(category => (
                  <Tag
                    size="sm"
                    variantColor="green"
                    textTransform="uppercase"
                    key={category}
                    mt={2}
                    mr={2}
                  >
                    {category}
                  </Tag>
                ))}
              {hit.tags &&
                hit.tags.map(tag => (
                  <Tag
                    size="sm"
                    variantColor="blue"
                    textTransform="lowercase"
                    key={tag}
                    mt={2}
                    mr={2}
                  >
                    {tag}
                  </Tag>
                ))}
            </Flex>
          )}
        </PseudoBox>
      ))}
    </Grid>
    <Button isDisabled={!hasMore} onClick={refineNext} width="100%" my={6}>
      Load more
    </Button>
  </Box>
);

export default InfiniteHits;
