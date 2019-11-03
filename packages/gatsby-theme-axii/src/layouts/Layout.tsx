import {
  ColorModeProvider,
  CSSReset,
  theme,
  ThemeProvider
} from "@chakra-ui/core";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LayoutProps from "./interfaces";

const Layout: React.FC = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Header />
        {children}
        <Footer />
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default Layout;
