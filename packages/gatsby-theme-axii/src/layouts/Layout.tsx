import {
  ColorModeProvider,
  CSSReset,
  theme,
  ThemeProvider
} from "@chakra-ui/core";
import { MDXProvider } from "@mdx-js/react";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MDXComponents from "../components/MDXComponents";
import LayoutProps from "./interfaces";

const Layout: React.FC = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <MDXProvider components={MDXComponents}>
          <Header />
          {children}
          <Footer />
        </MDXProvider>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default Layout;
