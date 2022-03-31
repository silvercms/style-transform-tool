import * as Babel from '@babel/standalone';
import {
  transformShorthandsHelper,
  transformShorthandsPlugin,
} from 'v9helper-babel-plugin-shorthands';
import { mapping } from './mapping';

const v0MappedSchemes = Object.keys(mapping);

const v0ToV9 = ({ scheme, token }) => mapping[`${scheme}`]?.[`${token}`];

const getTokensFromScheme = (scheme) => Object.keys(mapping[`${scheme}`] ?? {});

const getFirstMatchIndex = (userCode, scheme, token) => {
  const tokenString = `${scheme.toLowerCase()}.${token.toLowerCase()}`;
  const tokenStringRegex = new RegExp(`${tokenString}([^0-9a-z])`);
  const matches = userCode.toLowerCase().match(tokenStringRegex);
  if (matches?.length) {
    return matches.index;
  }
  return -1;
};

const transformTokenInString = (userCode) => {
  let result = userCode;

  v0MappedSchemes.forEach((scheme) => {
    if (result.toLowerCase().includes(`${scheme.toLowerCase()}.`)) {
      // scheme found
      const tokens = getTokensFromScheme(scheme);
      tokens.forEach((token) => {
        let index = getFirstMatchIndex(result, scheme, token);
        while (index >= 0) {
          // scheme.token found, try to locate the entire variable
          let start = index;
          while (start >= 1) {
            if (result.toLowerCase()[start - 1].match(/[^0-9a-z.]/)) {
              break;
            }
            start--;
          }
          const end = index + `${scheme}.${token}`.length;
          result =
            result.substring(0, start) +
            `tokens.${v0ToV9({ scheme, token })}` +
            result.substring(end);
          // check for next occurrence
          index = getFirstMatchIndex(result, scheme, token);
        }
      });
    }
  });

  return result;
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
        plugins: [[transformShorthandsPlugin]],
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
    return transformShorthandsInStyleObject(transformTokenInString(userCode));
  }
  return userCode;
}
