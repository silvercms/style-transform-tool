import { teamsTheme, Provider } from "@fluentui/react-northstar";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { transformNameSpacedStyle } from "./loadBabel";
import { ColorTokenApp, Home, TransformApp } from "./pages";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "transform",
      element: (
        <TransformApp transformNameSpacedStyle={transformNameSpacedStyle} />
      ),
    },
    { path: "colors", element: <ColorTokenApp /> },
  ]);
  return routes;
};

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
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
