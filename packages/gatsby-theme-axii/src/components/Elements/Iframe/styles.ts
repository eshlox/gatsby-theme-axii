import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      position: "relative",
      paddingBottom: "56.25%",
      height: 0,
      overflow: "hidden",
      maxWidth: "100%",
      "& iframe": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      }
    }
  })
);

export default useStyles;
