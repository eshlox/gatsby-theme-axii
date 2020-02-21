import Container from "@material-ui/core/Container";
import React from "react";

const pre: React.FC<{ children: JSX.Element }> = props => {
  if (props.children?.props?.originalType === "code") {
    return props.children;
  }

  return (
    <Container maxWidth="md">
      <pre {...props} />
    </Container>
  );
};

export default pre;
