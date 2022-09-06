import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FRLGIronmonMap } from "./FRLGIronmonMap";
import { Provider } from "react-redux";
import { store } from "./state";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <FRLGIronmonMap />
    </Provider>
  </React.StrictMode>
);
