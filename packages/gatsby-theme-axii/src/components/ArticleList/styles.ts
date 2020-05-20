import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useAllArticlesStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

export default useAllArticlesStyles;
