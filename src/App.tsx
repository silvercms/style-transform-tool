import * as React from "react";
import { Editor } from "./components/Editor";
import * as Babel from "@babel/standalone";
import { BabelFileResult } from "@babel/core";
import template from "@babel/template";
import { Identifier, ObjectExpression, ObjectProperty } from "@babel/types";

export const plugins: any = {};

plugins["babel-transform-namespaced-styles"] =
  require("./lib/babel-transform-namespaced-styles.js").default;

const transformNameSpacedStyle = (
  code: string,
  userVariables: string[]
): BabelFileResult & {
  error?: string;
} => {
  try {
    return Babel.transform(code, {
      filename: "example.ts",
      presets: ["typescript"],
      plugins: [
        [
          plugins["babel-transform-namespaced-styles"],
          {
            userVariables,
          },
        ],
      ],
      highlightCode: false,
    });
  } catch (error) {
    return { error: (error as any)?.toString() };
  }
};

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

function App() {
  const [userCode, setUserCode] = React.useState("");

  const result = transformNameSpacedStyle(userCode, [
    "searchFeedbackButton",
    "topChevronButton",
    "filterButton",
  ]);
  console.log(result?.code);
  const display = result?.code ?? result?.error ?? "";

  console.log(getAllVariables(userCode));

  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Editor
          code={userCode}
          onCodeChange={(newCode) => setUserCode(newCode)}
        />
        <Editor code={display} />
      </div>
    </div>
  );
}

export default App;
