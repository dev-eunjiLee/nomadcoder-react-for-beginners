import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById("root")
);

// * React 18 버전용
// import { createRoot } from "react-dom/client";
// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<App />);
