import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& span": {
        paddingBottom: theme.spacing(1),
        paddingRight: theme.spacing(1)
      }
    }
  })
);

export default useStyles;
