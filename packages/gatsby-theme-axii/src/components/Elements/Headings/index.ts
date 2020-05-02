import React from "react";
import renderHeading from "./renderHeading";

export const h1: React.FC = (props) =>
  renderHeading(props.children, "h1", "h1");

export const h2: React.FC = (props) =>
  renderHeading(props.children, "h2", "h2");

export const h3: React.FC = (props) =>
  renderHeading(props.children, "h3", "h3");

export const h4: React.FC = (props) =>
  renderHeading(props.children, "h4", "h4");

export const h5: React.FC = (props) =>
  renderHeading(props.children, "h5", "h5");

export const h6: React.FC = (props) =>
  renderHeading(props.children, "h6", "h6");
