import Typography from "@material-ui/core/Typography";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React from "react";
import usePostDateStyles from "./styles";
import { PostDateProps } from "./types";

dayjs.extend(relativeTime);

const PostDate: React.FC<PostDateProps> = (props: PostDateProps) => {
  const classes = usePostDateStyles();

  const { date } = props;
  const fromNow = dayjs(date).fromNow();

  return (
    <Typography variant="caption" className={classes.date} display="block">
      {fromNow}
    </Typography>
  );
};

export default PostDate;
