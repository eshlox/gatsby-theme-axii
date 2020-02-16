import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "gatsby";
import React from "react";
import useStyles from "./styles";

const InfiniteHits: React.FC<{
  hits: any;
  hasMore: boolean;
  refineNext: any;
}> = props => {
  const classes = useStyles();
  const { hits, hasMore, refineNext } = props;

  return (
    <Box>
      <List className={classes.list}>
        {hits.map((hit: any) => (
          <ListItem key={hit.objectID} button component={Link} to={hit.slug}>
            <ListItemAvatar>
              <Avatar>{hit.title[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={hit.title} secondary={hit.date} />
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        color="primary"
        size="large"
        disabled={!hasMore}
        onClick={refineNext}
        className={classes.button}
      >
        Load more
      </Button>
    </Box>
  );
};

export default InfiniteHits;
