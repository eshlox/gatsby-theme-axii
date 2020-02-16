import React from "react";
import { ThemeProvider } from "./src/context/ThemeContext";

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};
