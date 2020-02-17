import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AvatarStyle } from "./interfaces";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: (props: AvatarStyle) => ({
      marginBottom: theme.spacing(props.marginBottom),
      marginTop: theme.spacing(props.marginTop),
      width: "200px",
      [theme.breakpoints.up("md")]: {
        width: "300px"
      },
      [theme.breakpoints.up("lg")]: {
        width: "400px"
      }
    })
  })
);

export default useStyles;
