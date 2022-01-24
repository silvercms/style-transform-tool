import { showthandsKeywordForEasyReplace } from "./shorthandsWorkaround.js";

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ types: t }) {
  return {
    visitor: {
      ExportNamedDeclaration(path, { opts: { allShorthandsKeys } }) {
        t.assertVariableDeclaration(path.node.declaration);
        t.assertVariableDeclarator(path.node.declaration.declarations[0]);
        path.traverse({
          ObjectProperty(path) {
            if (t.isIdentifier(path.node.key)) {
              const key = path.node.key.name;
              if (allShorthandsKeys.includes(key)) {
                const value = path.get("value");

                let newSource;
                if (t.isStringLiteral(value)) {
                  newSource = `${showthandsKeywordForEasyReplace}.${key}(${value.node.value
                    .split(" ")
                    .map((token) => `"${token.trim()}"`)
                    .join(", ")})`;
                } else if (t.isMemberExpression(value)) {
                  newSource = `${showthandsKeywordForEasyReplace}.${key}(${value.toString()})`;
                } else if (t.isTemplateLiteral(value)) {
                  const currSource = value.toString();
                  const currSourceWithoutQuotes = currSource.slice(
                    1,
                    currSource.length - 1
                  );
                  newSource = `${showthandsKeywordForEasyReplace}.${key}(${currSourceWithoutQuotes
                    .split(" ")
                    .map((token) =>
                      token.trim()[0] === "$"
                        ? `\`${token.trim()}\``
                        : `"${token.trim()}"`
                    )
                    .join(", ")})`;
                }

                newSource && path.replaceWithSourceString(newSource);
              }
            }
          },
        });
      },
    },
  };
}
