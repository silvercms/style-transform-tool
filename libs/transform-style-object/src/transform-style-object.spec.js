import { transformStylesObject } from './transform-style-object';

describe('transformStyleObject', () => {
  it('should work', () => {
    expect(
      transformStylesObject(`{
        color: colorSchemeDefault.foreground,
        background: colorSchemeDefault.background,
        backgroundColor: colorSchemeDefault.background,
        position: "absolute",
        left: "50%",
        top: "50%",
        overflow: "auto",
        transform: "translateX(-50%) translateY(-50%)",
        textDecoration: "underline overline dotted",
        borderRadius: 1,
        ":hover": {
          color: colorSchemeDefault.foregroundHover,
          backgroundColor: colorSchemeDefault.backgroundHover1,
        },
      }`)
    ).toMatchInlineSnapshot(`
      " {
          color: tokens.colorNeutralForeground1,
          backgroundColor: tokens.colorNeutralBackground1,
          backgroundColor: tokens.colorNeutralBackground1,
          position: \\"absolute\\",
          left: \\"50%\\",
          top: \\"50%\\",
          ...shorthands.overflow(\\"auto\\"),
          transform: \\"translateX(-50%) translateY(-50%)\\",
          // FIXME: ❌ unsupported css property, please manually expand shorthand
          textDecoration: \\"underline overline dotted\\",
          ...shorthands.borderRadius(1),
          \\":hover\\": {
            color: tokens.colorNeutralForeground2Hover,
            backgroundColor: tokens.colorNeutralBackground4Hover
          }
        }
      "
    `);
  });
});
