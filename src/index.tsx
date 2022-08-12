import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FRLGIronmonMap } from "./FRLGIronmonMap";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <FRLGIronmonMap />
  </React.StrictMode>
);
