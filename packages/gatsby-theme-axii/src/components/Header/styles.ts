import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    blogButton: {
      marginRight: theme.spacing(4),
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: "transparent",
      boxShadow: "none",
    },
  })
);

export default useStyles;
