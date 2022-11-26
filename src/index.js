/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./views/App";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// CSS
import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
