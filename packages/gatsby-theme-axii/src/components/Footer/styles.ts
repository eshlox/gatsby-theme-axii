import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3),
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column-reverse",
      },
    },
    social: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      [theme.breakpoints.down("sm")]: {
        paddingBottom: theme.spacing(2),
        justifyContent: "center",
      },
    },
    copyright: {
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
      },
    },
  })
);

export default useStyles;
