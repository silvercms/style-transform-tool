import * as React from "react";

import Editor from "react-simple-code-editor";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsLight";
import { useAutoControlled } from "../hooks/useAutoControlled";
import { teamsV2Theme } from "@fluentui/react-northstar";

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
  flexGrow: 1,
  ...theme.plain,
};

export interface EditorWithLineNumProp {
  title?: string;
  code?: string;
  onCodeChange?: (newCode: string) => void;
  TokenRenderer?: ComponentTokenRenderer;
}

const MyEditor = ({
  title,
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: `1px solid ${teamsV2Theme.siteVariables.colorScheme.default.background5}`,
      }}
    >
      <div
        style={{
          backgroundColor:
            teamsV2Theme.siteVariables.colorScheme.default.foreground5,
          height: 40,
          padding: 12,
          fontSize: 16,
          display: "flex",
          alignItems: "center",
        }}
      >
        {title ?? ""}
      </div>
      <Editor
        value={value}
        onValueChange={handleValueChange}
        highlight={handleHighlight(TokenRenderer)}
        padding={10}
        textareaId="codeArea"
        className="editor"
        style={editorStyle as React.CSSProperties}
      />
    </div>
  );
};
MyEditor.displayName = "Editor";

export { MyEditor as Editor };
