import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { MDXProvider } from "@mdx-js/react";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MDXComponents from "../components/MDXComponents";
import { darkTheme, lightTheme } from "../styles/theme";
import LayoutQuery from "./interfaces";
import useStyles from "./styles";

const query = graphql`
  {
    site {
      siteMetadata {
        monetization {
          paymentPointer
        }
      }
    }
  }
`;

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const {
    site: {
      siteMetadata: {
        monetization: { paymentPointer },
      },
    },
  }: LayoutQuery = useStaticQuery(query);

  const theme = React.useMemo(
    () => (prefersDarkMode ? darkTheme : lightTheme),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta
          name="twitter:widgets:theme"
          content={prefersDarkMode ? "dark" : "light"}
        />
        {paymentPointer && (
          <meta name="monetization" content={paymentPointer} />
        )}
      </Helmet>
      <CssBaseline />
      <Box className={classes.root}>
        <Header className={classes.header} />
        <Container component="main" className={classes.main} maxWidth="md">
          <MDXProvider components={MDXComponents}>{children}</MDXProvider>
        </Container>
        <Footer className={classes.footer} />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
