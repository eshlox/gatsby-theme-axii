import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { MDXProvider } from "@mdx-js/react";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MDXComponents from "../components/MDXComponents";
import { darkTheme, lightTheme } from "../styles/theme";
import useStyles from "./styles";

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () => (prefersDarkMode ? darkTheme : lightTheme),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <meta
            name="twitter:widgets:theme"
            content={prefersDarkMode ? "dark" : "light"}
          />
        </Helmet>
        <CssBaseline />
        <Box className={classes.root}>
          <Header className={classes.header} />
          <Container component="main" className={classes.main} maxWidth="md">
            <MDXProvider components={MDXComponents}>{children}</MDXProvider>
          </Container>
          <Footer className={classes.footer} />
        </Box>
      </HelmetProvider>
    </ThemeProvider>
  );
};

export default Layout;
