import {
  getTokensFromScheme,
  v0MappedSchemes,
  v0ToV9,
} from "../tokenMapping/getColorToken.js";

export const transformTokenInString = (userCode) => {
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
            if (
              result.toLowerCase()[start - 1] === " " ||
              result.toLowerCase()[start - 1] === "\n"
            ) {
              break;
            }
            start--;
          }
          const end = index + `${scheme}.${token}`.length;
          result =
            result.substring(0, start) +
            `tokens.${v0ToV9({ scheme, token })}` +
            result.substring(end + 1);
          // check for next occurrence
          index = getFirstMatchIndex(result, scheme, token);
        }
      });
    }
  });

  return result;
};

const getFirstMatchIndex = (userCode, scheme, token) => {
  const tokenString = `${scheme.toLowerCase()}.${token.toLowerCase()}`;
  const tokenStringRegex = new RegExp(`${tokenString}(,|\\s)`);
  const matches = userCode.toLowerCase().match(tokenStringRegex);
  if (matches?.length) {
    return matches.index;
  }
  return -1;
};
