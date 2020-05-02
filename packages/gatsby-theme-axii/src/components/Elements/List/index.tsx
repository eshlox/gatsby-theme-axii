import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";

export const ul: React.FC = (props) => <Box {...props} component="ul" />;
export const ol: React.FC = (props) => <Box {...props} component="ol" />;
export const li: React.FC = (props) => <Typography {...props} component="li" />;
