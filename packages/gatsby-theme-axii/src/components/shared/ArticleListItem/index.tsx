import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "gatsby";
import React from "react";
import PostDate from "../ArticleDate";
import { ArticleListItemProps } from "./types";

const ArticleListItem: React.FC<ArticleListItemProps> = (
  props: ArticleListItemProps
) => {
  const { title, slug, date } = props;

  return (
    <ListItem button component={Link} to={slug}>
      <ListItemAvatar>
        <Avatar>{title[0]}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={title} secondary={<PostDate date={date} />} />
    </ListItem>
  );
};

export default ArticleListItem;
