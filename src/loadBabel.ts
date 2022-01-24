import * as Babel from "@babel/standalone";
import { shorthands } from "@griffel/core";
import { transformShorthands } from "./lib/shorthandsWorkaround";

export const plugins: any = {};

plugins["babel-transform-namespaced-styles"] =
  require("./lib/babel-transform-namespaced-styles.js").default;
plugins["babel-transform-shorthands"] =
  require("./lib/babel-transform-shorthands.js").default;

export const allShorthandsKeys = Object.keys(shorthands);

export type TransformNameSpacedStyle = (
  code: string,
  userVariables: string[]
) => { code?: string; error?: string };

export const transformNameSpacedStyle: TransformNameSpacedStyle = (
  code: string,
  userVariables: string[]
) => {
  try {
    const resultFromBabel = Babel.transform(code, {
      filename: "styles.ts",
      presets: ["typescript"],
      plugins: [
        [
          plugins["babel-transform-namespaced-styles"],
          {
            userVariables,
          },
        ],
        [
          plugins["babel-transform-shorthands"],
          {
            allShorthandsKeys,
          },
        ],
      ],
      highlightCode: false,
    });
    return {
      code: transformShorthands(resultFromBabel.code),
    };
  } catch (error) {
    return { error: (error as any)?.toString() };
  }
};

/// ------------ below is used for transform shorthands in style object

export const isUserCodeObject = (userCode: string) => {
  userCode = removeCommentsFromStyleObject(userCode);

  if (userCode[0] === "{" && userCode[userCode.length - 1] === "}") {
    return true;
  }
  return false;
};

const removeCommentsFromStyleObject = (userCode: string) =>
  userCode
    .split("\n")
    .filter((line) => !line.trim().startsWith("//"))
    .join("\n")
    .trim();

export type TransformShorthandsInStyleObject = (code: string) => string;
export const transformShorthandsInStyleObject: TransformShorthandsInStyleObject =
  (code) => {
    try {
      const resultFromBabel = Babel.transform(
        `export const useStyles = makeStyles({special_root: \n ${code}})`,
        {
          filename: "styles.ts",
          presets: ["typescript"],
          plugins: [
            [
              plugins["babel-transform-shorthands"],
              {
                allShorthandsKeys,
              },
            ],
          ],
          highlightCode: false,
        }
      );

      const extractStyleObject =
        resultFromBabel.code &&
        transformShorthands(
          resultFromBabel.code.slice(
            resultFromBabel.code.indexOf("special_root:") +
              "special_root:".length,
            resultFromBabel.code.length - 3
          )
        );
      return extractStyleObject ?? code;
    } catch (error) {
      return code;
    }
  };
