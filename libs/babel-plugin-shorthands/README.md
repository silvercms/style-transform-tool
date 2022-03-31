Babel plugin to identify CSS shorthands in makeStyles call and transform it.

```ts
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
);
```

will transform into

```ts
export const useStyles = makeStyles({
  root: {
    ...shorthands.border('0.1rem', 'solid', 'red'),
  },
});
```
