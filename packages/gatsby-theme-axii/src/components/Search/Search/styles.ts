import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    filters: {
      marginTop: theme.spacing(1),
    },
    allArticlesButton: {
      marginBottom: theme.spacing(3),
    },
  })
);

export default useStyles;
