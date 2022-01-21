import { teamsTheme, Provider, Divider } from "@fluentui/react-northstar";
import React from "react";
import ReactDOM from "react-dom";
import TransformApp from "./TransformApp";
import { ColorTokenApp } from "./ColorTokenApp";

ReactDOM.render(
  <React.StrictMode>
    <Provider theme={teamsTheme}>
      <ColorTokenApp />
      <Divider style={{ height: 80 }} />
      <TransformApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
