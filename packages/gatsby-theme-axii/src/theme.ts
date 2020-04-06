import blue from "@material-ui/core/colors/blue";
import orange from "@material-ui/core/colors/orange";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

const baseTheme: ThemeOptions = {
  typography: {
    htmlFontSize: 17,
    fontSize: 17,
    h1: { fontSize: "3rem", fontWeight: 500 },
    h2: { fontSize: "2.25rem", fontWeight: 500 },
    h3: { fontSize: "1.875rem", fontWeight: 500 },
    h4: { fontSize: "1.5rem", fontWeight: 500 },
    h5: { fontSize: "1.25rem", fontWeight: 500 },
    h6: { fontSize: "1.125rem", fontWeight: 500 },
  },
  palette: {
    primary: blue,
    secondary: orange,
  },
};

let darkThemeOptions = { ...baseTheme };
darkThemeOptions!.palette!.type = "dark";

const darkTheme = responsiveFontSizes(createMuiTheme({ ...darkThemeOptions }));

let lightThemeOptions = { ...baseTheme };
lightThemeOptions!.palette!.type = "light";

const lightTheme = responsiveFontSizes(
  createMuiTheme({ ...lightThemeOptions })
);

export { lightTheme, darkTheme };
