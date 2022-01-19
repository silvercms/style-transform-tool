import * as React from "react";
import {
  ColorSchemeDropdown,
  ColorTokenDropdown,
} from "./components/ColorDropdown";
import { ColorToken } from "./components/ColorToken";
import {
  getV0ColorValues,
  v0ToV9,
  getV9ColorValues,
} from "./tokenMapping/getColorToken";

export const ColorTokenApp = () => {
  const [scheme, setScheme] = React.useState("default");
  const [token, setToken] = React.useState("foreground");

  const v0Name = `${scheme}.${token}`;
  const v0Value = getV0ColorValues({ scheme, token });
  const v9Name = v0ToV9({ scheme, token });
  const v9Value = getV9ColorValues({ scheme, token });

  return (
    <div style={{ padding: 10 }}>
      <div style={{ display: "flex", gap: 10 }}>
        <ColorSchemeDropdown setSelectedScheme={setScheme} />
        <ColorTokenDropdown scheme={scheme} setSelectedToken={setToken} />
      </div>
      <ColorToken name={v0Name} value={v0Value} />
      {v9Name && <ColorToken name={v9Name} value={v9Value} />}
    </div>
  );
};
ColorTokenApp.displayName = "ColorTokenApp";
