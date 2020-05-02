import React from "react";
import Layout from "./src/layout";

export const wrapRootElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
