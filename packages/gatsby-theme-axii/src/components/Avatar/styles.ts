import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: "200px",
      [theme.breakpoints.up("md")]: {
        width: "300px"
      },
      [theme.breakpoints.up("lg")]: {
        width: "400px"
      }
    }
  })
);

export default useStyles;
