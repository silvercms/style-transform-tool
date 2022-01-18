import {
  boxClassName,
  buttonContentClassName,
  iconClassNames,
  svgIconClassName,
} from "@fluentui/react-northstar";

import siteVariables from "../../site-variables";
import { INamespacedOverrides } from "../../../namespace.interface";

export default {
  root: {
    searchFeedbackButton: ({
      colorSchemeDefault,
      colorSchemeBrand: { foregroundActive },
    }) => {
      return {
        color: colorSchemeDefault.foreground2,
        background: foregroundActive,
        display: "flex",
        ":hover": {
          color: foregroundActive,
        },
      };
    },
    seeMoreButton: ({
      fontWeightSemibold,
      colorSchemeBrand,
      focusOuterBorderColor,
    }) => ({
      cursor: "pointer",
      width: "auto",
      height: "auto",
      minWidth: "auto",
      fontWeight: fontWeightSemibold,
      right: "0.1rem",
      color: colorSchemeBrand.foreground1,
      paddingLeft: 0,
      paddingRight: 0,
      boxShadow: "none",
      transition: "none",
      ":focus": {
        ":before": "none",
        ":after": "none",
      },
      ":focus-visible": {
        border: `0.1rem solid ${focusOuterBorderColor}`,
        ":before": "none",
        ":after": "none",
      },
      ":hover": {
        [`& .${buttonContentClassName}`]: {
          textDecoration: "underline",
        },
      },
      border: "none",
      borderTop: "0.1rem solid transparent",
      borderBottom: "0.1rem solid transparent",
    }),
    openToggleButton: ({
      colorSchemeDefault,
      colorSchemeBrand,
      shadowLevel2,
    }) => ({
      background: colorSchemeDefault.background,
      border: "none",
      borderRadius: `0 0 ${siteVariables.borderRadiusMedium} ${siteVariables.borderRadiusMedium}`,
      bottom: "-1.6rem",
      boxShadow: shadowLevel2,
      display: "block",
      height: "2.0rem",
      left: "50%",
      opacity: 0,
      outline: "none",
      padding: 0,
      position: "absolute",
      textAlign: "center",
      transform: "translate(-50%, 0)",
      width: "9.6rem",
      zIndex: 1,
      transition: "box-shadow .467s ease, opacity .267s ease",
      margin: 0,
      ":focus": {
        boxShadow: "inherit",
      },
      ":focus-visible": {
        opacity: 1,
        boxShadow: shadowLevel2,
        backgroundColor: colorSchemeDefault.background,
      },
      ":hover": {
        [`& .${iconClassNames.filled}`]: {
          display: "block",
          fill: colorSchemeBrand.foregroundHover,
        },
      },
    }),
    topChevronButton: ({ colorSchemeDefault, colorSchemeBrand }) => ({
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
          bottom: "0",
        },
        ":before": {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
        backgroundColor: "transparent",
      },
      ":hover": {
        [`& .${iconClassNames.outline}`]: {
          display: "none",
        },
        [`& .${iconClassNames.filled}`]: {
          display: "block",
          fill: colorSchemeBrand.foregroundHover,
        },
        backgroundColor: "transparent",
      },
      ":active": {
        backgroundColor: "transparent",
      },
    }),
    searchPaginationButton: ({ colorSchemeDefault }) => ({
      display: "inline-block",
      height: "3.2rem",
      minWidth: "3.2rem",
      padding: "0.5rem 0",
      "& svg": {
        color: colorSchemeDefault.foreground,
      },
      ":hover": {
        backgroundColor: colorSchemeDefault.backgroundHover1,
        color: colorSchemeDefault.foreground,
      },
    }),
    searchPaginationArrowButton: ({ colorSchemeDefault }) => ({
      boxSizing: "border-box",
      minWidth: 0,
      padding: 0,
      width: "3.2rem",
      ":hover": {
        backgroundColor: colorSchemeDefault.backgroundHover1,
        color: colorSchemeDefault.foreground,
        [`& .${iconClassNames.filled}`]: {
          display: "none",
        },
        [`& .${iconClassNames.outline}`]: {
          display: "block",
        },
      },
    }),
    searchPaginationPreviousNextButton: ({
      colorSchemeBrand,
      colorSchemeDefault,
      fontWeightRegular,
    }) => ({
      color: colorSchemeDefault.foreground2,
      fontSize: "1.4rem",
      fontWeight: fontWeightRegular,
      border: "none",
      minWidth: "inherit",
      ":hover": {
        color: colorSchemeBrand.foregroundActive,
      },
    }),
    filterButton: ({ colorSchemeDefault }) => ({
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
        fill: colorSchemeDefault.foreground1,
      },
      ":active": {
        backgroundColor: colorSchemeDefault.backgroundPressed,
        animation: "none",
      },
      ":hover": {
        backgroundColor: colorSchemeDefault.background4,
      },
      ":focus-visible": {
        ":after": {
          left: "-0.1rem",
          right: "-0.1rem",
          top: "-0.1rem",
          bottom: "-0.1rem",
        },
        ":before": {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      [`& .${svgIconClassName}`]: {
        background: "transparent",
        display: "flex",
        alignItems: "center",
      },
    }),
    filterButtonSelected: ({ colorSchemeDefault, focusOuterBorderColor }) => ({
      padding: 0,
      borderRadius: "1.5rem",
      backgroundColor: colorSchemeDefault.background,
      border: `0.1rem solid transparent`,
      minWidth: "auto",
      boxSizing: "content-box",
      "& svg": {
        height: "1.2rem",
        width: "1.2rem",
      },
      ":active": {
        backgroundColor: colorSchemeDefault.backgroundPressed,
        animation: "none",
        borderColor: "transparent",
      },
      ":hover": {
        backgroundColor: colorSchemeDefault.background4,
        border: "transparent",
      },
      ":focus-visible": {
        border: `0.1rem solid transparent`,
        ":hover": {
          borderColor: focusOuterBorderColor,
        },
        ":active": {
          borderColor: focusOuterBorderColor,
        },
      },
    }),
    peopleFilterButtonSelected: () => ({
      ":focus-visible": {
        borderColor: "transparent",
        ":after": {
          borderRadius: "1.5rem",
        },
        ":before": {
          borderRadius: "1.5rem",
        },
      },
    }),
    hideOverflow: () => ({ overflow: "hidden" }),
    teamChannelFilterSelected: ({ focusOuterBorderColor }) => ({
      borderRadius: siteVariables.borderRadiusMedium,
      ":focus-visible": {
        border: `0.1rem solid ${focusOuterBorderColor}`,
      },
    }),
    dateFilterSelected: () => ({
      borderRadius: "0.3rem",
    }),
    filterButtonOpen: ({ colorSchemeDefault }) => ({
      backgroundColor: colorSchemeDefault.background,
    }),
    clearAllButton: ({
      colorSchemeBrand,
      colorSchemeDefault,
      fontWeightRegular,
      variableProps: { isVisible },
    }) => ({
      borderLeft: `0.1rem solid ${colorSchemeDefault.border}`,
      display: isVisible ? "block" : "none",
      paddingLeft: "1.2rem",
      minWidth: "inherit",
      marginLeft: "0.7rem",
      height: "2.8rem",
      color: colorSchemeDefault.foreground1,
      [`& .${buttonContentClassName}`]: {
        fontWeight: fontWeightRegular,
      },
      ":hover": {
        [`& .${boxClassName}`]: {
          color: colorSchemeBrand.foreground,
        },
      },
    }),
    clickableText: ({ fontWeightSemibold }) => ({
      fontWeight: fontWeightSemibold,
      margin: "0 0 0.3rem -0.8rem",
      ":hover": {
        textDecoration: "underline",
      },
    }),
    clickableTextNoResult: ({ fontWeightSemibold }) => ({
      fontWeight: fontWeightSemibold,
      margin: "0 0 0.3rem -0.3rem",
      ":hover": {
        textDecoration: "underline",
      },
      padding: "0 0.4rem",
    }),
    suggestedQueryText: ({ fontWeightSemibold }) => ({
      margin: "0 -0.5rem",
      minWidth: "auto",
      width: "auto",
      display: "inline-block",
      fontStyle: "italic",
      fontWeight: fontWeightSemibold,
      ":hover": {
        textDecoration: "underline",
      },
    }),
    suggestedQueryTextMargin: () => ({
      margin: "0 -0.5rem 0.45rem -0.6rem",
    }),
    carouselArrow: () => ({
      minWidth: 0,
      padding: 0,
      width: "3.2rem",
      display: "inline-block",
      height: "3.2rem",
      border: "none",
      boxShadow: "none",
    }),
    carouselArrowEnabled: ({ colorSchemeBrand }) => ({
      backgroundColor: "transparent",
      "& svg": {
        fill: colorSchemeBrand.foreground,
      },
      [`& .${iconClassNames.filled}`]: {
        display: "none",
      },
      [`& .${iconClassNames.outline}`]: {
        display: "block",
      },
      ":active": {
        backgroundColor: "transparent",
      },
      ":hover": {
        backgroundColor: "transparent",
        [`& .${iconClassNames.filled}`]: {
          display: "block",
        },
        [`& .${iconClassNames.outline}`]: {
          display: "none",
        },
      },
      ":focus-visible": {
        backgroundColor: "transparent",
      },
    }),
    carouselArrowDisabled: ({ colorSchemeDefault }) => ({
      backgroundColor: "transparent",
      cursor: "default",
      "& svg": {
        fill: colorSchemeDefault.foregroundDisabled1,
      },
      [`& .${iconClassNames.filled}`]: {
        display: "none",
      },
      [`& .${iconClassNames.outline}`]: {
        display: "block",
      },
      ":active": {
        backgroundColor: "transparent",
      },
      ":hover": {
        backgroundColor: "transparent",
      },
      ":focus-visible": {
        backgroundColor: "transparent",
        ":after": {
          borderColor: colorSchemeDefault.foregroundDisabled1,
        },
      },
    }),
    teamItem: ({ colorSchemeDefault }) => ({
      ":hover": {
        color: colorSchemeDefault.foreground2,
      },
    }),
    clipboardCopiedButton: () => ({
      cursor: "pointer",
    }),
    customRangeClearBtn: () => ({
      minWidth: 0,
    }),
    actionButton: ({ colorSchemeDefault }) => ({
      display: "none",
      color: colorSchemeDefault.foreground2,
      ":hover": {
        color: colorSchemeDefault.foregroundHover,
      },
    }),
    searchBoxSuggestionContainer: ({ colorSchemeDefault }) => ({
      color: colorSchemeDefault.foreground,
      width: "100%",
      minWidth: "100%",
      height: "4.8rem",
      outlineOffset: "-0.2rem",
      background: "transparent",
      padding: "0.5rem 1.8rem 0.5rem 0",
      border: "none",
      boxShadow: "none",
      textAlign: "left",
      alignItems: "center",
      justifyContent: "normal",
      ":hover": {
        cursor: "pointer",
        backgroundColor: colorSchemeDefault.backgroundHover,
        color: colorSchemeDefault.foregroundHover,
        "& .action_button": {
          display: "block",
        },
      },
      ":focus": {
        backgroundColor: colorSchemeDefault.backgroundFocus,
      },
      "[data-sb-focus=true]": {
        "& .action_button": {
          display: "block",
        },
      },
      "& .action_button[data-sb-focus=true]": {
        display: "block",
      },
    }),
    searchClearButton: ({ colorSchemeDefault }) => ({
      backgroundColor: colorSchemeDefault.background4,
      color: colorSchemeDefault.foreground1,
      padding: 0,
      minWidth: "3.2rem",
      boxShadow: "none",
      border: "none",
      borderRadius: 0,
      borderLeft: `0.1rem solid ${colorSchemeDefault.background5}`,
      // disable border radius only for left part of the button
      borderTopRightRadius: "0.27rem",
      borderBottomRightRadius: "0.27rem",
      borderBottomLeftRadius: 0,
      borderTopLeftRadius: 0,
      ":hover": {
        borderLeft: `0.1rem solid transparent`,
      },
      ":active": {
        borderLeft: `0.1rem solid transparent`,
      },
    }),
    searchClearButtonDummySb: () => ({
      // by default the stardust input adds a 1rem margin to the right
      // removing that margin to have the button on the far right.
      // Also adding .03rem to avoid having the button displayed over the input border.
      right: "calc(-1rem + .03rem)",
    }),
    cardDeeplinkCTAButton: ({ focusOuterBorderColor, fontSizes }) => ({
      height: "2.4rem",
      padding: "0 0.7rem",
      borderRadius: siteVariables.borderRadiusMedium,
      ":focus": {
        ":before": "none",
        ":after": "none",
      },
      ":focus-visible": {
        borderColor: `${focusOuterBorderColor}`,
        ":before": "none",
        ":after": "none",
      },
      minWidth: "auto",
      [`& .${buttonContentClassName}`]: {
        fontSize: fontSizes.small,
        height: "2.4rem",
        lineHeight: "2.4rem",
      },
      boxShadow: "none",
    }),
  },
  icon: {
    filterButton: () => ({
      width: "fit-content",
      height: "fit-content",
      marginLeft: 0,
      cursor: "pointer",
      zIndex: 42,
    }),
    teamItem: () => ({
      width: "fit-content",
      height: "fit-content",
      marginRight: "0.7rem",
    }),
    searchFeedbackButton: () => ({
      marginRight: "0.8rem",
    }),
  },
} as INamespacedOverrides;
