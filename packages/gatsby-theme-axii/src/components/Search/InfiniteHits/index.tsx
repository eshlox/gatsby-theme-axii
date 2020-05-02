import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "gatsby";
import React from "react";
import useStyles from "./styles";

dayjs.extend(relativeTime);

const InfiniteHits: React.FC<{
  hits: any;
  hasMore: boolean;
  refineNext: any;
}> = (props) => {
  const classes = useStyles();
  const { hits, hasMore, refineNext } = props;

  const postDate = (date: string) => {
    const fromNow = dayjs(date).fromNow();

    return (
      <Typography variant="caption" className={classes.date} display="block">
        {fromNow}
      </Typography>
    );
  };

  return (
    <Box>
      <List className={classes.list}>
        {hits.map((hit: any) => (
          <ListItem key={hit.objectID} button component={Link} to={hit.slug}>
            <ListItemAvatar>
              <Avatar>{hit.title[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={hit.title} secondary={postDate(hit.date)} />
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
        fullWidth
      >
        Load more
      </Button>
    </Box>
  );
};

export default InfiniteHits;
