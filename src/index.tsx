import { teamsTheme, Provider } from "@fluentui/react-northstar";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ColorTokenApp } from "./ColorTokenApp";

ReactDOM.render(
  <React.StrictMode>
    <Provider theme={teamsTheme}>
      <ColorTokenApp />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
