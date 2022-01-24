import * as React from "react";
import { Editor } from "../components/Editor";
import * as Babel from "@babel/standalone";
import template from "@babel/template";
import { Identifier, ObjectExpression, ObjectProperty } from "@babel/types";
import { VariablesContext } from "./variablesContext";
import { ClickableVariablesRenderer } from "../components/ClickableVariablesRenderer";
import { transformTokenInString } from "../lib/transformToken";
import { TransformNameSpacedStyle } from "../loadBabel";
import {
  Button,
  Dialog,
  Header,
  InfoIcon,
  Text,
} from "@fluentui/react-northstar";

const getAllVariables = (code: string): string[] => {
  const variables = new Set<string>();
  try {
    const transformedCode = Babel.transform(code, {
      filename: "example.ts",
      presets: ["typescript"],
      highlightCode: false,
    });
    const ast = template.program.ast(transformedCode.code as string);
    const exportStmt = ast.body.find(
      (node) => node.type === "ExportDefaultDeclaration"
    );
    const slots = (exportStmt as any)?.declaration?.properties;
    slots.forEach((slot: ObjectProperty) => {
      const variableProperties = (slot.value as ObjectExpression)
        .properties as ObjectProperty[];
      variableProperties?.forEach((variableProperty: ObjectProperty) => {
        variables.add((variableProperty.key as Identifier).name);
      });
    });
    return Array.from(variables);
  } catch (error) {
    return [];
  }
};

const isUserCodeObject = (userCode: string) => {
  userCode = userCode.trim();
  if (userCode[0] === "{" && userCode[userCode.length - 1] === "}") {
    return true;
  }
  return false;
};

export function TransformApp({
  transformNameSpacedStyle,
}: {
  transformNameSpacedStyle: TransformNameSpacedStyle;
}) {
  const [userCode, setUserCode] = React.useState("");
  const [selectedVariables, setSelectedVariables] = React.useState<string[]>(
    []
  );

  let allVariables: string[] = [];
  let result: string;

  if (isUserCodeObject(userCode)) {
    result = transformTokenInString(userCode);
  } else {
    allVariables = getAllVariables(userCode);
    const transformed = transformNameSpacedStyle(userCode, selectedVariables);
    result = transformed?.code ?? transformed?.error ?? "";
  }

  const variableContextValue = {
    allVariables,
    selectedVariables,
    setSelectedVariables,
  };

  const showNamespacedExample = () => {
    setUserCode(nameSpacedExample);
    setSelectedVariables(namespacedExampleSelectedVariables);
  };

  const showObjectExample = () => {
    setUserCode(objectExample);
  };

  return (
    <VariablesContext.Provider value={variableContextValue}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          padding: 10,
          width: 1200,
          maxWidth: "calc(100vw - 10px)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "auto",
            padding: 10,
            gap: 80,
          }}
        >
          <Text size="large">styles to makeStyles</Text>
          <div style={{ display: "flex", gap: 10 }}>
            <Dialog
              trigger={
                <Button icon={<InfoIcon />} text content="How it works?" />
              }
              content={<Help />}
            />
            <Button
              content="namespaced styles example"
              onClick={showNamespacedExample}
            />
            <Button
              content="styles object example"
              onClick={showObjectExample}
            />
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) 10px minmax(0, 1fr)",
            padding: 10,
            justifyContent: "space-evenly",
          }}
        >
          <Editor
            title={"Component Styles"}
            code={userCode}
            onCodeChange={(newCode) => setUserCode(newCode)}
            TokenRenderer={ClickableVariablesRenderer}
          />
          <div />
          <Editor title={"Result"} code={result} />
        </div>
      </div>
    </VariablesContext.Provider>
  );
}

const Help = () => (
  <div>
    <Header as="h2" content="How it works" />
    You can transform <strong>namespaced styles file</strong> or replace color
    tokens in <strong>styles object</strong>.
    <Header as="h3" content="namespaced styles" />
    <ul>
      <li>paste the content of the namespaced styles file *-namespace-*.ts</li>
      <li>select variables by clicking it in the editor</li>
      <li>
        the result will contain:
        <ul>
          <li>
            <Code>makeStyles</Code> import
          </li>
          <li>
            <Code>makeStyles</Code> hook with styles in selected variables
          </li>
          <li>the corresponding color token</li>
        </ul>
      </li>
    </ul>
    <Header as="h3" content="styles object" />
    <ul>
      <li>
        simply paste the styles object -<br />
        <Code>{`{ color: colorSchemeDefault.foreground }`}</Code> <br />
        this tool will replace the color token with its corresponding token in
        converged library
      </li>
    </ul>
  </div>
);

const Code = ({ children }: { children: React.ReactChild }) => (
  <span style={{ fontFamily: "monospace" }}>{children}</span>
);

const objectExample = `{
  color: colorSchemeDefault.foreground,
  background: colorSchemeDefault.background,
  backgroundColor: colorSchemeDefault.background,
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translateX(-50%) translateY(-50%)",
  ":hover": {
    color: colorSchemeDefault.foregroundHover,
    backgroundColor: colorSchemeDefault.backgroundHover1,
  },
}`;

const namespacedExampleSelectedVariables = [
  "webinarRegistrationPageImageDialogTriggerButton",
  "deleteImageButton",
];
const nameSpacedExample = `// button-namespace-webinar.ts
import { INamespacedOverrides } from "../../../namespace.interface";

export default {
  root: {
    webinarRegistrationPageImageDialogTriggerButton: ({
      colorSchemeDefault,
    }) => ({
      color: colorSchemeDefault.foreground,
      background: colorSchemeDefault.background,
      backgroundColor: colorSchemeDefault.background,
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translateX(-50%) translateY(-50%)",
      ":hover": {
        color: colorSchemeDefault.foregroundHover,
        backgroundColor: colorSchemeDefault.backgroundHover1,
      },
    }),
    webinarPageAddSpeakerButton: () => ({
      padding: 0,
      justifyContent: "start",
      width: "fit-content",
      margin: "0 3.8rem", // distance from add speaker button to its container
    }),
    webinarDeleteQuestionButton: () => ({
      padding: 0,
      width: "3.2rem",
      minWidth: "3.2rem",
    }),
    addButton: () => ({
      padding: 0,
      justifyContent: "start",
      width: "fit-content",
    }),
    registerButton: () => ({
      width: "fit-content",
      minWidth: "11.5rem",
      height: "3.2rem",
      padding: "0 1rem",
      margin: "1.8rem 0",
    }),
    cancelRegisterButton: () => ({
      padding: 0,
      minWidth: "fit-content",
    }),
    deleteImageButton: ({ colorSchemeDefault, colorSchemeOnyx }) => ({
      position: "absolute",
      right: 0,
      top: 0,
      color: colorSchemeDefault.foreground3,
      backgroundColor: colorSchemeOnyx.background,
      background: colorSchemeOnyx.background,
      ":hover": {
        backgroundColor: colorSchemeOnyx.backgroundPressed,
        color: colorSchemeDefault.foreground3,
      },
      ":active": {
        backgroundColor: colorSchemeDefault.background5,
        color: colorSchemeDefault.foreground4,
      },
    }),
    promoOfferDialogCloseButton: () => ({
      position: "absolute",
      right: "2rem",
      top: "1.8rem",
    }),
  },
} as INamespacedOverrides;
`;
