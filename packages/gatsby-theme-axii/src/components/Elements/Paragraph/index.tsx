import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";

const p: React.FC<{ children: JSX.Element }> = (props) => {
  if (props.children?.props) {
    return <Box {...props} />;
  }

  return <Typography component="p" {...props} />;
};

export default p;
