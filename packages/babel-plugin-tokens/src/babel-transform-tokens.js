import tokenMapping from "./tokenMapping.json";
import { teamsV2Theme } from "@fluentui/react-northstar";

const v8ToV9colors = ({ scheme, token }) =>
  tokenMapping[`${scheme}`]?.[`${token}`];

const ALL_SCHEMES = ["palette", "semanticcolors"];

// first check duplicate and then add comment
const addLeadingComment = (path, comment) => {
  if (!path.node.leadingComments?.some(({ value }) => value === comment)) {
    path.addComment("leading", comment, true);
  }
};

const addFixMe = (t, path, comment) => {
  let parent = path.parentPath;
  while (parent && !t.isObjectProperty(parent)) {
    parent = parent.parentPath;
  }
  if (parent) {
    addLeadingComment(
      parent,
      comment ?? ` FIXME: ❌ No v9 matching found for token ${path.toString()}`
    );
  }
};

const transformColorToken = (t, path) => {
  const key = path.get("object");
  const value = path.get("property");

  if (!t.isLiteral(key) && t.isIdentifier(value)) {
    const keyName = t.isIdentifier(key)
      ? key.node.name
      : key.toString().split(".").pop();

    // may be color token
    const scheme = ALL_SCHEMES.find((schemeName) =>
      keyName.toLowerCase().includes(schemeName)
    );

    if (scheme) {
      const token = value.node.name;
      let v9token = v8ToV9colors({ scheme, token });

      if (Array.isArray(v9token)) {
        const alternativeTokens = v9token.reduce(
          (acc, current, index) =>
            index ? acc + (acc.length ? ", " : "") + current : acc,
          ""
        );

        if (alternativeTokens) {
          addFixMe(
            t,
            path,
            ` NOTE: Alternative tokens found for '${scheme}.${token}': ${alternativeTokens}`
          );
        }

        v9token = v9token[0];
      }

      if (v9token) {
        path.replaceWith(
          t.memberExpression(t.identifier("tokens"), t.identifier(v9token))
        );
      } else {
        addFixMe(t, path);
      }
    }
  } else if (t.isLiteral(value)) {
    // may be single color
    const colorGroup = key.toString().split(".").pop();
    const valueStr = value.toString();
    const colorNumber = valueStr.startsWith('"')
      ? valueStr.slice(1, valueStr.length - 1)
      : valueStr;
    const colorHex =
      teamsV2Theme.siteVariables.colors[colorGroup]?.[colorNumber];
    if (colorHex) {
      let parent = path.parentPath;
      while (parent && !t.isObjectProperty(parent)) {
        parent = parent.parentPath;
      }
      if (parent) {
        addLeadingComment(
          parent,
          ` You can locate a token in https://react.fluentui.dev/?path=/docs/theme-color--page`
        );
        addLeadingComment(
          parent,
          ` FIXME: ⚠️ No v9 matching found for token ${path.toString()}, its value is \`${colorHex}\``
        );
      }
    } else {
      addFixMe(t, path);
    }
  }
};

// transform token + add FIXME comment in conditional expression
export const transformTokensPlugin = ({ types: t }) => ({
  visitor: {
    CallExpression(path) {
      if (
        t.isIdentifier(path.node.callee) &&
        path.node.callee.name === "makeStyles"
      ) {
        path.traverse({
          ObjectProperty(path) {
            path.traverse({
              MemberExpression(path) {
                transformColorToken(t, path);
              },
            });
          },
        });
      }
    },
  },
});
