import Box from "@material-ui/core/Box";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";
import React from "react";
import useStyles from "./styles";

const code: React.FC<{ className?: string }> = (props) => {
  const classes = useStyles();
  const { children, className } = props;

  const language = className ? className.replace(/language-/, "") : "";

  if (!language) {
    return <Box component="pre" {...props} />;
  }

  const code = children?.toString() || "";

  return (
    <Highlight {...defaultProps} code={code} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box
          component="pre"
          className={`${className} ${classes.root}`}
          style={{ ...style }}
        >
          {tokens.map((line, i) => (
            <Box key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <Box
                  component="span"
                  key={key}
                  {...getTokenProps({ token, key })}
                />
              ))}
            </Box>
          ))}
        </Box>
      )}
    </Highlight>
  );
};

export default code;
