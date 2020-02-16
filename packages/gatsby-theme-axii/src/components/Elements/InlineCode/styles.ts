import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor:
        theme.palette.type === "dark"
          ? "rgba(255, 229, 100, 0.2)"
          : "rgba(255, 229, 100, 0.4)",
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
      fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace'
    }
  })
);

export default useStyles;
