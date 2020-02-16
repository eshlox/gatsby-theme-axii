import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      textAlign: "center"
    },
    body: {
      marginBottom: theme.spacing(8),
      marginTop: theme.spacing(8),
      "& span.gatsby-resp-image-wrapper": {
        marginBottom: theme.spacing(8),
        marginTop: theme.spacing(8)
      }
    },
    support: {
      marginBottom: theme.spacing(2)
    },
    twitterComments: {
      marginBottom: theme.spacing(2)
    },
    button: {
      width: "100%"
    }
  })
);

export default useStyles;
