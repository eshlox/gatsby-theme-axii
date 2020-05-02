import { ReactNode } from "react";
const slugger = require("github-slugger").slug;

const generateSlug = (children: ReactNode): string | undefined => {
  if (typeof children === "string") {
    return slugger(children);
  }

  if (Array.isArray(children)) {
    const title = children.find((child) => typeof child === "string");

    if (!title) {
      return undefined;
    }

    return slugger(title);
  }

  return undefined;
};

export default generateSlug;
