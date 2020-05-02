import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useMarkdownStyles = makeStyles((theme: Theme) =>
  createStyles({
    markdown: {
      "& > * + *": {
        marginTop: theme.spacing(4),
      },
      "& > * + h1, & > * + h2, & > * + h3, & > * + h4, & > * + h5, & > * + h6": {
        marginTop: theme.spacing(12),
      },
      "& twitter-widget": {
        margin: "0 auto !important",
      },
    },
  })
);

export default useMarkdownStyles;
