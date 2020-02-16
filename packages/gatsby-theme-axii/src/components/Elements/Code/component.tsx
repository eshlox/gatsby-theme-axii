import Container from "@material-ui/core/Container";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";
import React from "react";
import useStyles from "./styles";

const code: React.FC<{ className?: string }> = props => {
  const classes = useStyles();
  const { children, className } = props;

  const language = className ? className.replace(/language-/, "") : "";

  if (!language) {
    return (
      <Container maxWidth="md">
        <pre className={classes.root} {...props} />
      </Container>
    );
  }

  const code = children?.toString() || "";

  return (
    <Container maxWidth="md">
      <Highlight
        {...defaultProps}
        code={code}
        language={language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${className} ${classes.root}`} style={{ ...style }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Container>
  );
};

export default code;
