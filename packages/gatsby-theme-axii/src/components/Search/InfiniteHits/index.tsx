import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import React from "react";
import ArticleListItem from "../../shared/ArticleListItem";
import useStyles from "./styles";

const InfiniteHits: React.FC<{
  hits: any;
  hasMore: boolean;
  refineNext: any;
}> = (props) => {
  const classes = useStyles();
  const { hits, hasMore, refineNext } = props;

  return (
    <Box>
      <List className={classes.list}>
        {hits.map((hit: any) => (
          <ArticleListItem
            key={hit.objectID}
            slug={hit.slug}
            title={hit.title}
            date={hit.date}
          />
        ))}
      </List>
      <Button
        variant="contained"
        color="primary"
        size="large"
        disabled={!hasMore}
        onClick={refineNext}
        className={classes.button}
        fullWidth
      >
        Load more
      </Button>
    </Box>
  );
};

export default InfiniteHits;
