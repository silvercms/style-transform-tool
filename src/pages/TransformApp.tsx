import * as React from "react";
import { Editor } from "../components/Editor";
import * as Babel from "@babel/standalone";
import template from "@babel/template";
import { Identifier, ObjectExpression, ObjectProperty } from "@babel/types";
import { VariablesContext } from "./variablesContext";
import { ClickableVariablesRenderer } from "../components/ClickableVariablesRenderer";
import { transformTokenInString } from "../lib/transformToken";
import {
  isUserCodeObject,
  TransformNameSpacedStyle,
  TransformShorthandsInStyleObject,
} from "../loadBabel";
import {
  ArrowUpIcon,
  Button,
  Dialog,
  Header,
  InfoIcon,
  Text,
  Tooltip,
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

export function TransformApp({
  transformNameSpacedStyle,
  transformShorthandsInStyleObject,
}: {
  transformNameSpacedStyle: TransformNameSpacedStyle;
  transformShorthandsInStyleObject: TransformShorthandsInStyleObject;
}) {
  const [userCode, setUserCode] = React.useState<string>(placeholderCode);
  const [selectedVariables, setSelectedVariables] = React.useState<string[]>(
    []
  );

  let allVariables: string[] = [];
  let result: string;

  if (isUserCodeObject(userCode)) {
    result = transformShorthandsInStyleObject(transformTokenInString(userCode));
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
          alignItems: "center",
          gap: 20,
          padding: 10,
          paddingBottom: 40,
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
            width: "100%",
          }}
        >
          <Editor
            title={"Component Styles"}
            code={userCode}
            onCodeChange={(newCode) => setUserCode(newCode)}
            TokenRenderer={ClickableVariablesRenderer}
            placeholderCode={placeholderCode}
          />
          <div />
          <Editor title={"Result"} code={result} showCopyButton />
        </div>
        <ScrollToTopButton />
      </div>
    </VariablesContext.Provider>
  );
}

const placeholderCode = `// paste *-namespace-*.ts styles file, or
// paste a style object 
{ color: colorSchemeDefault.foreground }
`;

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return showButton ? (
    <Tooltip
      trigger={
        <Button
          icon={<ArrowUpIcon />}
          iconOnly
          title="Create"
          onClick={scrollToTop}
          style={{ position: "fixed", bottom: 60, left: "18%" }}
        />
      }
      content="scroll to top"
    />
  ) : null;
};

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
          <li>the corresponding color token from converged library</li>
          <li>
            expanded css shorthand using makeStyles <Code>shorthands</Code> api
          </li>
        </ul>
      </li>
    </ul>
    <Header as="h3" content="styles object" />
    <ul>
      <li>
        simply paste the styles object -<br />
        <Code>{`{ color: colorSchemeDefault.foreground }`}</Code> <br />
        the result will contain:
        <ul>
          <li>the corresponding color token from converged library</li>
          <li>
            expanded css shorthand using makeStyles <Code>shorthands</Code> api
          </li>
        </ul>
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
  overflow: "auto",
  transform: "translateX(-50%) translateY(-50%)",
  ":hover": {
    color: colorSchemeDefault.foregroundHover,
    backgroundColor: colorSchemeDefault.backgroundHover1,
  },
}`;

const namespacedExampleSelectedVariables = ["taskManager"];
const nameSpacedExample = `// box-namespace-debug.ts
import {
  INamespacedOverrides,
  INamespaceOverrideParam,
} from "../../../namespace.interface";

export default {
  root: {
    apolloDebugPanel: () => ({
      height: "auto",
      maxHeight: "calc(100vh - 4.436rem - 8.4rem)",
      overflow: "auto",
      overflowX: "scroll",
      padding: 0,
      paddingBottom: "0.618rem",
      userSelect: "text",
    }),
    taskManager: ({ colorSchemeDefault }: INamespaceOverrideParam) => ({
      backgroundColor: colorSchemeDefault.background,
      border: \`0.1rem solid \${colorSchemeDefault.border2}\`,
      bottom: "0.4rem",
      color: colorSchemeDefault.foreground,
      display: "flex",
      flexDirection: "column",
      opacity: 0.9,
      overflow: "scroll",
      padding: "1rem",
      position: "absolute",
      right: "0.4rem",
      top: "14rem",
      width: "80rem",
      zIndex: 1000,
    }),
    settingsDebugPanelTableWrapper: () => ({
      gridColumn: "1/3",
      gridRow: 2,
      overflow: "scroll",
      height: "75vh",
    }),
    settingsDebugFilterDropdown: () => ({
      maxHeight: "50vh",
      overflow: "scroll",
      display: "flex",
      flexDirection: "column",
    }),
  },
} as INamespacedOverrides;
`;
