import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(4),
      borderRadius: theme.shape.borderRadius,
      padding: theme.spacing(3),
      overflow: "auto",
      fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace'
    }
  })
);

export default useStyles;
