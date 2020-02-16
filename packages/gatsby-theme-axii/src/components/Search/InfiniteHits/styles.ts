import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4)
    },
    button: {
      marginBottom: theme.spacing(4),
      width: "100%"
    }
  })
);

export default useStyles;
