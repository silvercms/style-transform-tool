Babel plugin to identify CSS shorthands in makeStyles call and transform it.

```ts
import {
  transformShorthandsHelper,
  transformShorthandsPlugin,
} from 'v9helper-babel-plugin-shorthands';

const result = transformShorthandsHelper(
  Babel.transform(
    `export const useStyles = makeStyles({
  root: {
    border: \`0.1rem solid red\`
  }
});
`,
    {
      filename: 'styles.ts',
      plugins: [[transformShorthandsPlugin]],
    }
  ).code
);
```

result will be:

```ts
export const useStyles = makeStyles({
  root: {
    ...shorthands.border('0.1rem', 'solid', 'red'),
  },
});
```
