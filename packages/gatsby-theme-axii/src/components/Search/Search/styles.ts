import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    filters: {
      marginTop: theme.spacing(1)
    }
  })
);

export default useStyles;
