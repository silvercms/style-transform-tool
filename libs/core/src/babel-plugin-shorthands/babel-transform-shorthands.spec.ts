import * as Babel from '@babel/core';
import { transformShorthandsPlugin } from './babel-transform-shorthands.js';

describe('babel-transform-shorthands', () => {
  it('transform correctly', () => {
    const code = `
export const useStyles = makeStyles({
  root: {
    flex: 1,
    padding: "5px",
    background: tokens.colorNeutralForeground1
  },
});
`;

    expect(
      Babel.transformSync(code, {
        babelrc: false,
        configFile: false,
        plugins: [[transformShorthandsPlugin]],
      }).code
    ).toMatchInlineSnapshot(`
      "export const useStyles = makeStyles({
        root: {
          // FIXME: ❌ unsupported css property, please manually expand shorthand
          flex: 1,
          SHORTHANDS_KEYWORD_FOR_EASY_REPLACE.padding(\\"5px\\"),
          backgroundColor: tokens.colorNeutralForeground1
        }
      });"
    `);
  });

  it('transform shorthand with numeric value correctly', () => {
    const code = `
export const useStyles = makeStyles({
  root: { 
    borderWidth: 5, 
  },
});
`;

    expect(
      Babel.transformSync(code, {
        babelrc: false,
        configFile: false,
        plugins: [[transformShorthandsPlugin]],
      }).code
    ).toMatchInlineSnapshot(`
      "export const useStyles = makeStyles({
        root: { SHORTHANDS_KEYWORD_FOR_EASY_REPLACE.borderWidth(5)
        }
      });"
    `);
  });
});
