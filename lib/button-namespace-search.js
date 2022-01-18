import { boxClassName, buttonContentClassName, iconClassNames, svgIconClassName } from "@fluentui/react-northstar";
import siteVariables from "../../site-variables";
export const useStyles = makeStyles({
  root: {
    // styles from searchFeedbackButton
    color: colorSchemeDefault.foreground2,
    background: colorSchemeBrand.foregroundActive,
    display: "flex",
    ":hover": {
      color: colorSchemeBrand.foregroundActive
    },
    // styles from topChevronButton
    position: "absolute",
    top: "1.3rem",
    right: "1.2rem",
    border: "none",
    color: colorSchemeDefault.foreground2,
    height: "2.4rem",
    width: "1.2rem",
    minWidth: 0,
    boxShadow: "none",
    backgroundColor: "transparent",
    ":focus-visible": {
      ":after": {
        left: "0",
        right: "0",
        top: "0",
        bottom: "0"
      },
      ":before": {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      },
      backgroundColor: "transparent"
    },
    ":hover": {
      [`& .${iconClassNames.outline}`]: {
        display: "none"
      },
      [`& .${iconClassNames.filled}`]: {
        display: "block",
        fill: colorSchemeBrand.foregroundHover
      },
      backgroundColor: "transparent"
    },
    ":active": {
      backgroundColor: "transparent"
    },
    // styles from filterButton
    border: "none",
    padding: "0 0 0 1.2rem",
    height: "2.8rem",
    minWidth: "auto",
    borderRadius: siteVariables.borderRadiusMedium,
    color: colorSchemeDefault.foreground1,
    boxShadow: "none",
    animation: "none",
    transition: "none",
    backgroundColor: colorSchemeDefault.background1,
    "& svg": {
      height: "0.8rem",
      width: "0.8rem",
      fill: colorSchemeDefault.foreground1
    },
    ":active": {
      backgroundColor: colorSchemeDefault.backgroundPressed,
      animation: "none"
    },
    ":hover": {
      backgroundColor: colorSchemeDefault.background4
    },
    ":focus-visible": {
      ":after": {
        left: "-0.1rem",
        right: "-0.1rem",
        top: "-0.1rem",
        bottom: "-0.1rem"
      },
      ":before": {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    [`& .${svgIconClassName}`]: {
      background: "transparent",
      display: "flex",
      alignItems: "center"
    }
  },
  icon: {
    // styles from filterButton
    width: "fit-content",
    height: "fit-content",
    marginLeft: 0,
    cursor: "pointer",
    zIndex: 42,
    // styles from searchFeedbackButton
    marginRight: "0.8rem"
  }
});