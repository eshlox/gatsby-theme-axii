import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(4)
    }
  })
);

export default useStyles;
