"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttonStyles = void 0;

var _reactNorthstar = require("@fluentui/react-northstar");

var _terms = require("../../../../terms");

var _themeNamespaceHelper = require("../../../theme-namespace-helper");

var _excluded = ["actionMenuHiddenButton", "appPickerItem", "callingParticipantIsSpeaking", "chatRosterTriggerText", "disableTransition", "emoticonButton", "enableFluentTabs", "giphyDisclaimerViewTerms", "giphyPickerItem", "hasError", "hasSmallerSpacingAfter", "isAcceptButton", "isActiveCallNumberButton", "isAdaptiveCardRefreshButton", "isAudioCardButton", "isAutoMuteChatAlertLink", "isBreakoutRoomsMainAssignDropdown", "isBreakoutRoomMoreActionButtion", "isBreakoutRoomsAssignmentDropdownLabel", "isBiometricEnrollmentButton", "isButtonLookingLikeIcon", "isCallHistorySelectedFilterButton", "isCallHistoryTriggerButton", "isCallingPrejoinBannerDismissButton", "isCallingPreJoinScreenOption", "isCallingPreJoinScreenSmallButton", "isCallingPreJoinV2ComputerAudioVolumeSlider", "isCallingRosterItemAction", "isCallingRosterLobbyButton", "isCallingRosterPopupButton", "isCallingRosterSectionAction", "isCallingScreenTextButton", "isCallingSidePanelIconOnlyButton", "isCallingSidePanelInlineButton", "isCallingUpsellScreen", "isCallParkButton", "isCallQualityFeedbackCancelBotton", "isCardButton", "isChatHeaderCallButton", "isShareButtonInteropChat", "isChatJoinButton", "isChatPaneIconButton", "isChatRosterActionButton", "isChatRosterActionButtonEmbed", "isChatRosterActionButtonOutside", "isChicletActionButton", "isCodeSnippetCardEditButton", "isCodeSnippetCardExpandButton", "isCodeSnippetErrorText", "isColorPickerButton", "isCompactChatDensity", "isComposeInsertTableCell", "isConfirmationNotificationButton", "isCopyMeetingInfoButton", "isCustomStickerUploadIcon", "isCustomTabContainerUnderlined", "isDenyButton", "isDialpadButton", "isDialpadSplitCallButton", "isDockedUbarCustomActionButton", "isErrorAlert", "isFailedMessageActionsButton", "isFilledOnHover", "isFloatingShareAppPreviewButton", "isFloatingShareTrayWindowMoreButton", "isFloatingShareWindowsPreviewButton", "isFloatingSharePPTPreview", "isFloatingSharePreviewButton", "isShareInviteButton", "isFreemiumShareIcon", "isGroupNameExpander", "isHeaderV1", "isHeaderV2", "isHiddenAppAttribution", "isInfoAlert", "isLearnMoreButton", "isLive", "isLiveHeaderButton", "isLobbyPopupCloseButton", "isMeetingChatNotificationSettingsDialog", "isMeetingOptionsButtonAndroid", "isMeetingOptionsButtonIos", "isMeetingOptionsButtonOutlookWindows", "isMeetingOptionsSuccessButton", "isMeetingOptionsButtonDisabled", "isMeetingRoomConsoleUbar", "isMeetingRoomCallingRoster", "isMessageReactionCountButton", "isMyselfVideoExpanded", "isNameDecoratorButton", "isNameGroupChatButton", "isNameGroupChatButtonEmbed", "isOverflowButton", "isParticipantNameLayerIcon", "isPlayrateMenu", "isPreview", "isPromoAlert", "isRailHeaderCloseButton", "isRecordingInfoBtn", "isRecordingMoreOptions", "hasRestrictedImage", "isRejectCallButton", "isRemoveButton", "isRosterHeaderMoreMenuButton", "isScreenRecordingDisabledDialogButton", "isScreenShareFromChatCloseButton", "isSelectedComposeInsertTableCell", "isSfCAcceptBlockPane", "isSfCAcceptBlockPanePreview", "isSharePreviewButton", "isSharePreviewSelected", "isShareTrayBrowseButton", "isSmartRepliesButton", "isSpeedDialContactGroupTriggerButton", "isSpeedDialTriggerButton", "isSquareShape", "isStacked", "isMinWidthBreakpointAtLeast360", "isMinWidthBreakpointAtLeast720", "isMoreMenuOpen", "isStackedAlertsButton", "isStickerPickerItemImageButton", "isSwitchCameraButton", "isTextOnlyConfirmationNotificationButton", "isTitleBarButton", "isTitleBarCloseButton", "isTranscriptGoToCurrentButton", "isT2MainWindow", "isCallTransferButton", "isUbarCustomButtonControl", "isUbarCustomIconControl", "isUbarCustomMenuItem", "isUrlPreviewCancelButton", "isVoicemailControl", "isWarningAlert", "loadingGiphyUrl", "messageExtensionGridItem", "messageExtensionListItem", "messageNotificationButton", "newMessageButton", "noBorderShadow", "overrideFocusStylesForPrimary", "primaryWithText", "setBackgroundColor", "starRatingFill", "stickerEditorButton", "textColorFocus", "transparent", "useCardButtonCustomMargin", "useCardButtonNonColorStyles", "useCardButtonSelectedColor", "useCardButtonTintColor"],
    _excluded2 = ["isChatRosterActionButton"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var buttonStyles = {
  amber: function amber(_ref) {
    var isAmber = _ref.variables;
    return _objectSpread({}, !!isAmber && _terms.terms.isChatRosterActionIcon.root);
  },
  // eslint-disable-next-line msteams/function-complexity
  root: function root(componentStyleParameters) {
    var disabled = componentStyleParameters.props.disabled,
        _componentStyleParame = componentStyleParameters.variables,
        actionMenuHiddenButton = _componentStyleParame.actionMenuHiddenButton,
        appPickerItem = _componentStyleParame.appPickerItem,
        callingParticipantIsSpeaking = _componentStyleParame.callingParticipantIsSpeaking,
        chatRosterTriggerText = _componentStyleParame.chatRosterTriggerText,
        disableTransition = _componentStyleParame.disableTransition,
        emoticonButton = _componentStyleParame.emoticonButton,
        enableFluentTabs = _componentStyleParame.enableFluentTabs,
        giphyDisclaimerViewTerms = _componentStyleParame.giphyDisclaimerViewTerms,
        giphyPickerItem = _componentStyleParame.giphyPickerItem,
        hasError = _componentStyleParame.hasError,
        hasSmallerSpacingAfter = _componentStyleParame.hasSmallerSpacingAfter,
        isAcceptButton = _componentStyleParame.isAcceptButton,
        isActiveCallNumberButton = _componentStyleParame.isActiveCallNumberButton,
        isAdaptiveCardRefreshButton = _componentStyleParame.isAdaptiveCardRefreshButton,
        isAudioCardButton = _componentStyleParame.isAudioCardButton,
        isAutoMuteChatAlertLink = _componentStyleParame.isAutoMuteChatAlertLink,
        isBreakoutRoomsMainAssignDropdown = _componentStyleParame.isBreakoutRoomsMainAssignDropdown,
        isBreakoutRoomMoreActionButtion = _componentStyleParame.isBreakoutRoomMoreActionButtion,
        isBreakoutRoomsAssignmentDropdownLabel = _componentStyleParame.isBreakoutRoomsAssignmentDropdownLabel,
        isBiometricEnrollmentButton = _componentStyleParame.isBiometricEnrollmentButton,
        isButtonLookingLikeIcon = _componentStyleParame.isButtonLookingLikeIcon,
        isCallHistorySelectedFilterButton = _componentStyleParame.isCallHistorySelectedFilterButton,
        isCallHistoryTriggerButton = _componentStyleParame.isCallHistoryTriggerButton,
        isCallingPrejoinBannerDismissButton = _componentStyleParame.isCallingPrejoinBannerDismissButton,
        isCallingPreJoinScreenOption = _componentStyleParame.isCallingPreJoinScreenOption,
        isCallingPreJoinScreenSmallButton = _componentStyleParame.isCallingPreJoinScreenSmallButton,
        isCallingPreJoinV2ComputerAudioVolumeSlider = _componentStyleParame.isCallingPreJoinV2ComputerAudioVolumeSlider,
        isCallingRosterItemAction = _componentStyleParame.isCallingRosterItemAction,
        isCallingRosterLobbyButton = _componentStyleParame.isCallingRosterLobbyButton,
        isCallingRosterPopupButton = _componentStyleParame.isCallingRosterPopupButton,
        isCallingRosterSectionAction = _componentStyleParame.isCallingRosterSectionAction,
        isCallingScreenTextButton = _componentStyleParame.isCallingScreenTextButton,
        isCallingSidePanelIconOnlyButton = _componentStyleParame.isCallingSidePanelIconOnlyButton,
        isCallingSidePanelInlineButton = _componentStyleParame.isCallingSidePanelInlineButton,
        isCallingUpsellScreen = _componentStyleParame.isCallingUpsellScreen,
        isCallParkButton = _componentStyleParame.isCallParkButton,
        isCallQualityFeedbackCancelBotton = _componentStyleParame.isCallQualityFeedbackCancelBotton,
        isCardButton = _componentStyleParame.isCardButton,
        isChatHeaderCallButton = _componentStyleParame.isChatHeaderCallButton,
        isShareButtonInteropChat = _componentStyleParame.isShareButtonInteropChat,
        isChatJoinButton = _componentStyleParame.isChatJoinButton,
        isChatPaneIconButton = _componentStyleParame.isChatPaneIconButton,
        isChatRosterActionButton = _componentStyleParame.isChatRosterActionButton,
        isChatRosterActionButtonEmbed = _componentStyleParame.isChatRosterActionButtonEmbed,
        isChatRosterActionButtonOutside = _componentStyleParame.isChatRosterActionButtonOutside,
        isChicletActionButton = _componentStyleParame.isChicletActionButton,
        isCodeSnippetCardEditButton = _componentStyleParame.isCodeSnippetCardEditButton,
        isCodeSnippetCardExpandButton = _componentStyleParame.isCodeSnippetCardExpandButton,
        isCodeSnippetErrorText = _componentStyleParame.isCodeSnippetErrorText,
        isColorPickerButton = _componentStyleParame.isColorPickerButton,
        isCompactChatDensity = _componentStyleParame.isCompactChatDensity,
        isComposeInsertTableCell = _componentStyleParame.isComposeInsertTableCell,
        isConfirmationNotificationButton = _componentStyleParame.isConfirmationNotificationButton,
        isCopyMeetingInfoButton = _componentStyleParame.isCopyMeetingInfoButton,
        isCustomStickerUploadIcon = _componentStyleParame.isCustomStickerUploadIcon,
        isCustomTabContainerUnderlined = _componentStyleParame.isCustomTabContainerUnderlined,
        isDenyButton = _componentStyleParame.isDenyButton,
        isDialpadButton = _componentStyleParame.isDialpadButton,
        isDialpadSplitCallButton = _componentStyleParame.isDialpadSplitCallButton,
        isDockedUbarCustomActionButton = _componentStyleParame.isDockedUbarCustomActionButton,
        isErrorAlert = _componentStyleParame.isErrorAlert,
        isFailedMessageActionsButton = _componentStyleParame.isFailedMessageActionsButton,
        isFilledOnHover = _componentStyleParame.isFilledOnHover,
        isFloatingShareAppPreviewButton = _componentStyleParame.isFloatingShareAppPreviewButton,
        isFloatingShareTrayWindowMoreButton = _componentStyleParame.isFloatingShareTrayWindowMoreButton,
        isFloatingShareWindowsPreviewButton = _componentStyleParame.isFloatingShareWindowsPreviewButton,
        isFloatingSharePPTPreview = _componentStyleParame.isFloatingSharePPTPreview,
        isFloatingSharePreviewButton = _componentStyleParame.isFloatingSharePreviewButton,
        isShareInviteButton = _componentStyleParame.isShareInviteButton,
        isFreemiumShareIcon = _componentStyleParame.isFreemiumShareIcon,
        isGroupNameExpander = _componentStyleParame.isGroupNameExpander,
        isHeaderV1 = _componentStyleParame.isHeaderV1,
        isHeaderV2 = _componentStyleParame.isHeaderV2,
        isHiddenAppAttribution = _componentStyleParame.isHiddenAppAttribution,
        isInfoAlert = _componentStyleParame.isInfoAlert,
        isLearnMoreButton = _componentStyleParame.isLearnMoreButton,
        isLive = _componentStyleParame.isLive,
        isLiveHeaderButton = _componentStyleParame.isLiveHeaderButton,
        isLobbyPopupCloseButton = _componentStyleParame.isLobbyPopupCloseButton,
        isMeetingChatNotificationSettingsDialog = _componentStyleParame.isMeetingChatNotificationSettingsDialog,
        isMeetingOptionsButtonAndroid = _componentStyleParame.isMeetingOptionsButtonAndroid,
        isMeetingOptionsButtonIos = _componentStyleParame.isMeetingOptionsButtonIos,
        isMeetingOptionsButtonOutlookWindows = _componentStyleParame.isMeetingOptionsButtonOutlookWindows,
        isMeetingOptionsSuccessButton = _componentStyleParame.isMeetingOptionsSuccessButton,
        isMeetingOptionsButtonDisabled = _componentStyleParame.isMeetingOptionsButtonDisabled,
        isMeetingRoomConsoleUbar = _componentStyleParame.isMeetingRoomConsoleUbar,
        isMeetingRoomCallingRoster = _componentStyleParame.isMeetingRoomCallingRoster,
        isMessageReactionCountButton = _componentStyleParame.isMessageReactionCountButton,
        isMyselfVideoExpanded = _componentStyleParame.isMyselfVideoExpanded,
        isNameDecoratorButton = _componentStyleParame.isNameDecoratorButton,
        isNameGroupChatButton = _componentStyleParame.isNameGroupChatButton,
        isNameGroupChatButtonEmbed = _componentStyleParame.isNameGroupChatButtonEmbed,
        isOverflowButton = _componentStyleParame.isOverflowButton,
        isParticipantNameLayerIcon = _componentStyleParame.isParticipantNameLayerIcon,
        isPlayrateMenu = _componentStyleParame.isPlayrateMenu,
        isPreview = _componentStyleParame.isPreview,
        isPromoAlert = _componentStyleParame.isPromoAlert,
        isRailHeaderCloseButton = _componentStyleParame.isRailHeaderCloseButton,
        isRecordingInfoBtn = _componentStyleParame.isRecordingInfoBtn,
        isRecordingMoreOptions = _componentStyleParame.isRecordingMoreOptions,
        hasRestrictedImage = _componentStyleParame.hasRestrictedImage,
        isRejectCallButton = _componentStyleParame.isRejectCallButton,
        isRemoveButton = _componentStyleParame.isRemoveButton,
        isRosterHeaderMoreMenuButton = _componentStyleParame.isRosterHeaderMoreMenuButton,
        isScreenRecordingDisabledDialogButton = _componentStyleParame.isScreenRecordingDisabledDialogButton,
        isScreenShareFromChatCloseButton = _componentStyleParame.isScreenShareFromChatCloseButton,
        isSelectedComposeInsertTableCell = _componentStyleParame.isSelectedComposeInsertTableCell,
        isSfCAcceptBlockPane = _componentStyleParame.isSfCAcceptBlockPane,
        isSfCAcceptBlockPanePreview = _componentStyleParame.isSfCAcceptBlockPanePreview,
        isSharePreviewButton = _componentStyleParame.isSharePreviewButton,
        isSharePreviewSelected = _componentStyleParame.isSharePreviewSelected,
        isShareTrayBrowseButton = _componentStyleParame.isShareTrayBrowseButton,
        isSmartRepliesButton = _componentStyleParame.isSmartRepliesButton,
        isSpeedDialContactGroupTriggerButton = _componentStyleParame.isSpeedDialContactGroupTriggerButton,
        isSpeedDialTriggerButton = _componentStyleParame.isSpeedDialTriggerButton,
        isSquareShape = _componentStyleParame.isSquareShape,
        isStacked = _componentStyleParame.isStacked,
        isMinWidthBreakpointAtLeast360 = _componentStyleParame.isMinWidthBreakpointAtLeast360,
        isMinWidthBreakpointAtLeast720 = _componentStyleParame.isMinWidthBreakpointAtLeast720,
        isMoreMenuOpen = _componentStyleParame.isMoreMenuOpen,
        isStackedAlertsButton = _componentStyleParame.isStackedAlertsButton,
        isStickerPickerItemImageButton = _componentStyleParame.isStickerPickerItemImageButton,
        isSwitchCameraButton = _componentStyleParame.isSwitchCameraButton,
        isTextOnlyConfirmationNotificationButton = _componentStyleParame.isTextOnlyConfirmationNotificationButton,
        isTitleBarButton = _componentStyleParame.isTitleBarButton,
        isTitleBarCloseButton = _componentStyleParame.isTitleBarCloseButton,
        isTranscriptGoToCurrentButton = _componentStyleParame.isTranscriptGoToCurrentButton,
        isT2MainWindow = _componentStyleParame.isT2MainWindow,
        isCallTransferButton = _componentStyleParame.isCallTransferButton,
        isUbarCustomButtonControl = _componentStyleParame.isUbarCustomButtonControl,
        isUbarCustomIconControl = _componentStyleParame.isUbarCustomIconControl,
        isUbarCustomMenuItem = _componentStyleParame.isUbarCustomMenuItem,
        isUrlPreviewCancelButton = _componentStyleParame.isUrlPreviewCancelButton,
        isVoicemailControl = _componentStyleParame.isVoicemailControl,
        isWarningAlert = _componentStyleParame.isWarningAlert,
        loadingGiphyUrl = _componentStyleParame.loadingGiphyUrl,
        messageExtensionGridItem = _componentStyleParame.messageExtensionGridItem,
        messageExtensionListItem = _componentStyleParame.messageExtensionListItem,
        messageNotificationButton = _componentStyleParame.messageNotificationButton,
        newMessageButton = _componentStyleParame.newMessageButton,
        noBorderShadow = _componentStyleParame.noBorderShadow,
        overrideFocusStylesForPrimary = _componentStyleParame.overrideFocusStylesForPrimary,
        primaryWithText = _componentStyleParame.primaryWithText,
        setBackgroundColor = _componentStyleParame.setBackgroundColor,
        starRatingFill = _componentStyleParame.starRatingFill,
        stickerEditorButton = _componentStyleParame.stickerEditorButton,
        textColorFocus = _componentStyleParame.textColorFocus,
        transparent = _componentStyleParame.transparent,
        useCardButtonCustomMargin = _componentStyleParame.useCardButtonCustomMargin,
        useCardButtonNonColorStyles = _componentStyleParame.useCardButtonNonColorStyles,
        useCardButtonSelectedColor = _componentStyleParame.useCardButtonSelectedColor,
        useCardButtonTintColor = _componentStyleParame.useCardButtonTintColor,
        ns = _objectWithoutProperties(_componentStyleParame, _excluded),
        siteVariables = componentStyleParameters.theme.siteVariables;

    var colorScheme = siteVariables.colorScheme;
    var colorSchemeBrand = colorScheme.brand,
        colorSchemeDefault = colorScheme.default;

    var _getOverride = (0, _themeNamespaceHelper.getOverrideFn)("Button", "root");

    return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, isNameDecoratorButton && !disableTransition && _objectSpread({
      minWidth: "auto",
      marginLeft: ".4rem",
      height: "auto"
    }, callingParticipantIsSpeaking && {
      color: colorSchemeDefault.foreground4,
      "& svg": {
        fill: colorSchemeDefault.foreground4
      }
    })), disableTransition && _defineProperty({
      transition: "unset"
    }, "&.".concat(_reactNorthstar.buttonClassName, ":focus"), {
      backgroundColor: "transparent"
    })), (isUbarCustomIconControl || isUbarCustomMenuItem) && disabled && {
      color: colorSchemeBrand.foregroundDisabled,
      ":hover": {
        backgroundColor: colorSchemeDefault.background4,
        color: colorSchemeBrand.foregroundDisabled
      }
    }), useCardButtonSelectedColor && _objectSpread(_objectSpread({}, useCardButtonSelectedColor === "tint" && {
      backgroundColor: colorSchemeBrand.borderActive1,
      color: colorSchemeBrand.foregroundPressed,
      borderColor: colorSchemeBrand.borderPressed,
      "&:hover": {
        backgroundColor: colorSchemeBrand.borderActive1,
        color: colorSchemeBrand.foregroundPressed,
        borderColor: colorSchemeBrand.borderPressed
      },
      "&:focus:active": {
        backgroundColor: colorSchemeBrand.borderActive1,
        color: colorSchemeBrand.foregroundPressed,
        borderColor: colorSchemeBrand.borderPressed
      },
      ":focus-visible": {
        backgroundColor: "".concat(colorSchemeBrand.borderActive1, " !important"),
        color: colorSchemeBrand.foregroundPressed
      }
    }), useCardButtonSelectedColor === "primary" && {
      backgroundColor: colorSchemeBrand.backgroundHover
    })), ns && _getOverride(ns, componentStyleParameters));
  },
  icon: function icon(componentStyleParameters) {
    var _componentStyleParame2 = componentStyleParameters.variables,
        isChatRosterActionButton = _componentStyleParame2.isChatRosterActionButton,
        ns = _objectWithoutProperties(_componentStyleParame2, _excluded2);

    var _getOverride = (0, _themeNamespaceHelper.getOverrideFn)("Button", "icon");

    return _objectSpread(_objectSpread({}, !!isChatRosterActionButton && _terms.terms.isChatRosterActionIcon.root), ns && _getOverride(ns, componentStyleParameters));
  }
}; // // <Button variables={{chatRosterTriggerText: true}}/>
// // /// ------------------
// // const styles = makeStyles({
// //   root: {
// //     ...{
// //       marginRight: "0.2rem",
// //     }
// //   }
// // })
// // <Button className={styles.root} />

exports.buttonStyles = buttonStyles;