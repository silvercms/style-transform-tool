import * as React from "react";

import Editor from "react-simple-code-editor";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsLight";
import { useAutoControlled } from "../hooks/useAutoControlled";

const handleHighlight = (code: string) => (
  <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </>
    )}
  </Highlight>
);

const editorStyle = {
  fontFamily: '"Fira code", "Fira Mono", monospace',
  outline: "1px solid",
  minWidth: "40vw",
  ...theme.plain,
};

export interface EditorWithLineNumProp {
  code?: string;
  onCodeChange?: (newCode: string) => void;
}

const MyEditor = ({ code, onCodeChange }: EditorWithLineNumProp) => {
  const [value, setValue] = useAutoControlled<string>({
    defaultValue: "",
    value: code ?? "",
  });

  const handleValueChange = (value: string) => {
    setValue(value);
    onCodeChange && onCodeChange(value);
  };

  return (
    <Editor
      value={value}
      onValueChange={handleValueChange}
      highlight={handleHighlight}
      padding={10}
      textareaId="codeArea"
      className="editor"
      style={editorStyle as React.CSSProperties}
    />
  );
};

export { MyEditor as Editor };
