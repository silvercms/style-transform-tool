import * as React from "react";

import Editor from "react-simple-code-editor";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsLight";
import { useAutoControlled } from "../hooks/useAutoControlled";

// type from prism
type StyleObj = {
  [key: string]: string | number | null;
};
export type TokenOutputProps = {
  key?: React.Key;
  style?: StyleObj;
  className: string;
  children: string;
  [otherProp: string]: any;
};

export type Token = {
  types: string[];
  content: string;
  empty?: boolean;
};
//

export type ComponentTokenRenderer = React.FC<{
  token: Token;
  tokenProps: TokenOutputProps;
}>;

const handleHighlight =
  (TokenRenderer?: ComponentTokenRenderer) => (code: string) =>
    (
      <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) =>
                  TokenRenderer ? (
                    <TokenRenderer
                      key={key}
                      token={token}
                      tokenProps={getTokenProps({ token, key })}
                    />
                  ) : (
                    <span key={key} {...getTokenProps({ token, key })} />
                  )
                )}
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
  TokenRenderer?: ComponentTokenRenderer;
}

const MyEditor = ({
  code,
  onCodeChange,
  TokenRenderer,
}: EditorWithLineNumProp) => {
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
      highlight={handleHighlight(TokenRenderer)}
      padding={10}
      textareaId="codeArea"
      className="editor"
      style={editorStyle as React.CSSProperties}
    />
  );
};

export { MyEditor as Editor };
