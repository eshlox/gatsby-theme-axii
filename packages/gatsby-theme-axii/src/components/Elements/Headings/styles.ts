import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      color: theme.palette.text.secondary,
      fontSize: "0.8em",
    },
  })
);

export default useStyles;
