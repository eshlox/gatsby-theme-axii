import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  main: {
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(6)
  },
  footer: {
    marginTop: "auto"
  }
}));

export default useStyles;
