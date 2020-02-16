import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paragraph: {
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(4)
    },
    twitter: {
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(4),
      "& twitter-widget": {
        marginLeft: "auto",
        marginRight: "auto"
      }
    },
    iframe: {
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(4)
    },
    image: {
      textAlign: "center"
    }
  })
);

export default useStyles;
