import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./app.css"; // or "./index.css" if that's your Tailwind entry

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
