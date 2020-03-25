import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { MDXProvider } from "@mdx-js/react";
import React from "react";
import Helmet from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MDXComponents from "../../components/MDXComponents";
import { ThemeContext } from "../../context/ThemeContext";
import { darkTheme, lightTheme } from "../../theme";
import useStyles from "./styles";

const Layout: React.FC = props => {
  const classes = useStyles();
  const { children } = props;

  return (
    <ThemeContext.Consumer>
      {({ isDark, changeTheme }) => (
        <React.Fragment>
          <Helmet>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
            <meta
              name="twitter:widgets:theme"
              content={isDark ? "dark" : "light"}
            />
          </Helmet>

          <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <div className={classes.root}>
              <CssBaseline />
              <Container component="main" maxWidth={false} disableGutters>
                <Header isDark={isDark} changeTheme={changeTheme} />
                <main className={classes.main}>
                  <MDXProvider components={MDXComponents}>
                    {children}
                  </MDXProvider>
                </main>
              </Container>
              <Footer className={classes.footer} />
            </div>
          </ThemeProvider>
        </React.Fragment>
      )}
    </ThemeContext.Consumer>
  );
};

export default Layout;
