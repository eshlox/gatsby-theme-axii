import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      borderRadius: theme.shape.borderRadius,
      padding: theme.spacing(3),
      overflow: "auto",
      fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace',
    },
  })
);

export default useStyles;
