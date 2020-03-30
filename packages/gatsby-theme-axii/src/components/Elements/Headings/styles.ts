import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    h1: {
      ...theme.typography.h1,
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(8)
    },
    h2: {
      ...theme.typography.h2,
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(8)
    },
    h3: {
      ...theme.typography.h3,
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(8)
    },
    h4: {
      ...theme.typography.h4,
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(8)
    },
    h5: {
      ...theme.typography.h5,
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(8)
    },
    h6: {
      ...theme.typography.h6,
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(8)
    }
  })
);

export default useStyles;
