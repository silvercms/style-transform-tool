import * as Babel from '@babel/standalone';
import {
  transformShorthandsHelper,
  transformShorthandsPlugin,
} from 'v9helper-babel-plugin-shorthands';
import { mapping } from './mapping';

const v0ToV9 = ({ scheme, token }) => mapping[`${scheme}`]?.[`${token}`];

const ALL_SCHEMES = [
  'default',
  'brand',
  'black',
  'white',
  'green',
  'orange',
  'pink',
  'red',
  'yellow',
  'silver',
  'onyx',
  'amethyst',
];

export const transformTokenPlugin = ({ types: t }) => {
  return {
    visitor: {
      ExportNamedDeclaration(path) {
        t.assertVariableDeclaration(path.node.declaration);
        t.assertVariableDeclarator(path.node.declaration.declarations[0]);
        path.traverse({
          MemberExpression(path) {
            const key = path.get('object');
            const value = path.get('property');
            if (t.isIdentifier(key) && t.isIdentifier(value)) {
              const scheme = ALL_SCHEMES.find((schemeName) =>
                key.node.name.toLowerCase().includes(schemeName)
              );
              if (scheme) {
                const token = value.node.name;
                const v9token = v0ToV9({ scheme, token });
                if (v9token) {
                  path.replaceWithSourceString(`tokens.${v9token}`);
                } else {
                  let parent = path.parentPath;
                  while (parent && !t.isObjectProperty(parent)) {
                    parent = parent.parentPath;
                  }
                  if (parent) {
                    parent.addComment(
                      'leading',
                      ` FIXME: ❌ No v9 matching found for token ${path.toString()}`,
                      true
                    );
                  }
                }
              }
            }
          },
        });
      },
    },
  };
};

const transformShorthandsInStyleObject = (code) => {
  try {
    const resultFromBabel = Babel.transform(
      `export const useStyles = makeStyles({special_root: \n ${code}})`,
      {
        babelrc: false,
        configFile: false,
        filename: 'styles.ts',
        presets: ['typescript'],
        plugins: [[transformTokenPlugin], [transformShorthandsPlugin]],
      }
    );

    const extractStyleObject =
      resultFromBabel.code &&
      transformShorthandsHelper(
        resultFromBabel.code.slice(
          resultFromBabel.code.indexOf('special_root:') +
            'special_root:'.length,
          resultFromBabel.code.length - 3
        )
      );
    return extractStyleObject ?? code;
  } catch (error) {
    return code;
  }
};

const isUserCodeObject = (userCode) => {
  userCode = removeCommentsFromStyleObject(userCode);

  if (userCode[0] === '{' && userCode[userCode.length - 1] === '}') {
    return true;
  }
  return false;
};

const removeCommentsFromStyleObject = (userCode) =>
  userCode
    .split('\n')
    .filter((line) => !line.trim().startsWith('//'))
    .join('\n')
    .trim();

export function transformStylesObject(userCode) {
  if (isUserCodeObject(userCode)) {
    return transformShorthandsInStyleObject(userCode);
  }
  return userCode;
}
