import { useMediaQuery } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ThemeContextInterface from "./interfaces";

const defaultValue: ThemeContextInterface = {
  isDark: false,
  changeTheme: () => {
    throw new Error("changeTheme() not implemented");
  }
};

export const ThemeContext = React.createContext(defaultValue);

export const ThemeProvider: React.FC = props => {
  const cookieName = "paletteType";

  const [cookies, setCookie] = useCookies();
  const [isDark, setIsDark] = useState(cookies[cookieName] === "dark");
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    if (cookies[cookieName]) {
      setIsDark(cookies[cookieName] === "dark");
    } else {
      setIsDark(prefersDarkMode);
    }
  }, [prefersDarkMode]);

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        changeTheme: () => {
          setIsDark(!isDark);
          setCookie(cookieName, isDark ? "light" : "dark", { path: "/" });
        }
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
