import * as React from "react";
import { Dropdown, DropdownProps } from "@fluentui/react-northstar";
import {
  getTokensFromScheme,
  v0MappedSchemes,
} from "../tokenMapping/getColorToken";

export const ColorSchemeDropdown = ({
  setSelectedScheme,
}: {
  setSelectedScheme: (scheme: string) => void;
}) => (
  <Dropdown
    search
    items={v0MappedSchemes}
    placeholder={v0MappedSchemes[0]}
    noResultsMessage="We couldn't find any matches."
    getA11ySelectionMessage={{
      onAdd: (item) => `${item} has been selected.`,
    }}
    onChange={(e, data: DropdownProps) => {
      data?.highlightedIndex !== null &&
        data?.highlightedIndex !== undefined &&
        setSelectedScheme(v0MappedSchemes[data?.highlightedIndex]);
    }}
  />
);
ColorSchemeDropdown.displayName = "ColorSchemeDropdown";

export const ColorTokenDropdown = ({
  scheme,
  setSelectedToken,
}: {
  scheme: string;
  setSelectedToken: (token: string) => void;
}) => {
  const tokens = getTokensFromScheme(scheme);
  return (
    <Dropdown
      search
      items={tokens}
      placeholder={tokens[0]}
      noResultsMessage="We couldn't find any matches."
      getA11ySelectionMessage={{
        onAdd: (item) => `${item} has been selected.`,
      }}
      onChange={(e, data: DropdownProps) => {
        data?.highlightedIndex !== null &&
          data?.highlightedIndex !== undefined &&
          setSelectedToken(tokens[data?.highlightedIndex]);
      }}
    />
  );
};
ColorTokenDropdown.displayName = "ColorTokenDropdown";
