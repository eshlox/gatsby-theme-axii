import blue from "@material-ui/core/colors/blue";
import orange from "@material-ui/core/colors/orange";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

const baseTheme: ThemeOptions = {
  typography: {
    fontSize: 16
  },
  palette: {
    primary: blue,
    secondary: orange
  }
};

let darkThemeOptions = { ...baseTheme };
darkThemeOptions!.palette!.type = "dark";

let darkTheme = createMuiTheme({
  ...darkThemeOptions
});
darkTheme = responsiveFontSizes(darkTheme);

let lightThemeOptions = { ...baseTheme };
lightThemeOptions!.palette!.type = "light";

let lightTheme = createMuiTheme({ ...lightThemeOptions });
lightTheme = responsiveFontSizes(lightTheme);

export { lightTheme, darkTheme };
