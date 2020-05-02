import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    date: {
      fontStyle: "italic",
    },
    button: {
      marginBottom: theme.spacing(3),
    },
  })
);

export default useStyles;
