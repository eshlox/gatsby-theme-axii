import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    blogButton: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    appBar: {
      backgroundColor: "transparent",
      boxShadow: "none"
    }
  })
);

export default useStyles;
