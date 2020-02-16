import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column-reverse"
      }
    },
    social: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center"
      }
    },
    copyright: {
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center"
      }
    }
  })
);

export default useStyles;
