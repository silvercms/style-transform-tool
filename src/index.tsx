import { teamsTheme, Provider, Divider } from "@fluentui/react-northstar";
import React from "react";
import ReactDOM from "react-dom";
import TransformApp from "./TransformApp";
import { ColorTokenApp } from "./ColorTokenApp";

ReactDOM.render(
  <React.StrictMode>
    <Provider theme={teamsTheme}>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ColorTokenApp />
        <Divider style={{ height: 80 }} />
        <TransformApp />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
