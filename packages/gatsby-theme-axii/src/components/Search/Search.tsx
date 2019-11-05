import { Box, Collapse, Grid } from "@chakra-ui/core";
import algoliasearch from "algoliasearch/lite";
import { graphql, useStaticQuery } from "gatsby";
import { sortBy } from "lodash";
import React from "react";
import {
  Configure,
  connectInfiniteHits,
  connectMenu,
  connectSearchBox,
  InstantSearch
} from "react-instantsearch-dom";
import InfiniteHits from "./InfiniteHits";
import SearchSettingsProps from "./interfaces";
import PoweredBy from "./PoweredBy";
import SearchInput from "./SearchInput";
import SelectField from "./SelectField";

const CustomSearchBox = connectSearchBox(SearchInput);
const CustomMenuSelect = connectMenu(SelectField);
const CustomInfiniteHits = connectInfiniteHits(InfiniteHits);

const query = graphql`
  {
    site {
      siteMetadata {
        search {
          algolia {
            posts {
              applicationId
              apiKey
            }
          }
        }
      }
    }
  }
`;

const Search = () => {
  const searchSettings: SearchSettingsProps = useStaticQuery(query);
  const {
    site: {
      siteMetadata: {
        search: {
          algolia: {
            posts: { applicationId, apiKey }
          }
        }
      }
    }
  } = searchSettings;
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);

  const searchClient = algoliasearch(applicationId, apiKey);

  return (
    <InstantSearch searchClient={searchClient} indexName="Posts">
      <Configure hitsPerPage={12} distinct />
      <CustomSearchBox showFilters={handleToggle} />
      <Collapse mt={4} isOpen={show}>
        <Grid
          gridAutoRows="auto"
          gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
          gridGap="1rem"
        >
          <CustomMenuSelect attribute="language" placeholder="All languages" />
          <CustomMenuSelect
            attribute="categories"
            placeholder="All categories"
            limit={1000}
            transormItems={items => sortBy(items, "value")}
          />
          <CustomMenuSelect
            attribute="tags"
            placeholder="All tags"
            limit={1000}
            transormItems={items => sortBy(items, "value")}
          />
        </Grid>
      </Collapse>

      <Box my={6}>
        <CustomInfiniteHits />
      </Box>

      <Box textAlign="center">
        <PoweredBy />
      </Box>
    </InstantSearch>
  );
};

export default Search;
