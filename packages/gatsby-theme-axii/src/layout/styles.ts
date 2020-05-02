import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "grid",
    gridTemplateAreas: `"header" "content" "footer"`,
    gridTemplateRows: "auto 1fr auto",
    gridGap: theme.spacing(6),
  },
  header: {
    gridArea: "header",
  },
  main: {
    gridArea: "content",
  },
  footer: {
    gridArea: "footer",
  },
}));

export default useStyles;
