import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/bootstrap/dist/css/bootstrap.css";
//import "bootstrap/dist/css/bootstrap";

//ReactDOM.render(<App />, document.querySelector("#root"));

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);