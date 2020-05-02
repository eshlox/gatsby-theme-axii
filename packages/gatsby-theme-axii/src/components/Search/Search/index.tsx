import Collapse from "@material-ui/core/Collapse";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import algoliasearch from "algoliasearch/lite";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import {
  Configure,
  connectInfiniteHits,
  connectMenu,
  connectSearchBox,
  InstantSearch,
} from "react-instantsearch-dom";
import InfiniteHits from "../InfiniteHits";
import Input from "../Input";
import SearchSettingsProps from "../interfaces";
import PoweredBy from "../PoweredBy";
import Select from "../Select";
import { sortBy } from "../utils";
import useStyles from "./styles";

const CustomSearchBox = connectSearchBox(Input);
const CustomMenuSelect = connectMenu(Select);
const CustomInfiniteHits = connectInfiniteHits(InfiniteHits);

const query = graphql`
  {
    site {
      siteMetadata {
        search {
          algolia {
            posts {
              applicationId
              searchApiKey
            }
          }
        }
      }
    }
  }
`;

const Search = () => {
  const classes = useStyles();
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  const searchSettings: SearchSettingsProps = useStaticQuery(query);
  const {
    site: {
      siteMetadata: {
        search: {
          algolia: {
            posts: { applicationId, searchApiKey },
          },
        },
      },
    },
  } = searchSettings;

  const searchClient = algoliasearch(applicationId, searchApiKey);

  return (
    <Container>
      <InstantSearch searchClient={searchClient} indexName="Posts">
        <Configure hitsPerPage={10} distinct />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CustomSearchBox showFilters={handleToggle} />
          </Grid>
        </Grid>

        <Collapse in={show}>
          <Grid container spacing={1} className={classes.filters}>
            <Grid item xs={12} md={4}>
              <CustomMenuSelect
                attribute="language"
                placeholder="All languages"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <CustomMenuSelect
                attribute="categories"
                placeholder="All categories"
                limit={1000}
                transformItems={(items) => items.concat().sort(sortBy("value"))}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <CustomMenuSelect
                attribute="tags"
                placeholder="All tags"
                limit={1000}
                transformItems={(items) => items.concat().sort(sortBy("value"))}
              />
            </Grid>
          </Grid>
        </Collapse>

        <CustomInfiniteHits />

        <PoweredBy />
      </InstantSearch>
    </Container>
  );
};

export default Search;
