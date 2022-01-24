import * as Babel from "@babel/standalone";
import { BabelFileResult } from "@babel/core";

export const plugins: any = {};

plugins["babel-transform-namespaced-styles"] =
  require("./lib/babel-transform-namespaced-styles.js").default;

export type TransformNameSpacedStyle = (
  code: string,
  userVariables: string[]
) => BabelFileResult & {
  error?: string;
};

export const transformNameSpacedStyle = (
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
