import blue from "@material-ui/core/colors/blue";
import orange from "@material-ui/core/colors/orange";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

const baseTheme: ThemeOptions = {
  typography: {
    htmlFontSize: 18,
    fontSize: 18,
    fontFamily: [
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "Noto Sans",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji"
    ].join(","),
    h1: {
      fontSize: "4rem"
    },
    h2: {
      fontSize: "3rem"
    },
    h3: {
      fontSize: "2.25rem"
    },
    h4: {
      fontSize: "1.875rem"
    },
    h5: {
      fontSize: "1.5rem"
    },
    h6: {
      fontSize: "1.25rem"
    }
  },
  palette: {
    primary: blue,
    secondary: orange
  }
};

let darkThemeOptions = { ...baseTheme };
darkThemeOptions!.palette!.type = "dark";

const darkTheme = responsiveFontSizes(
  createMuiTheme({
    ...darkThemeOptions
  })
);

let lightThemeOptions = { ...baseTheme };
lightThemeOptions!.palette!.type = "light";

const lightTheme = responsiveFontSizes(
  createMuiTheme({ ...lightThemeOptions })
);

export { lightTheme, darkTheme };
