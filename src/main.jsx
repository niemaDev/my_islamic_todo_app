import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // <-- YOU NEED THIS IMPORT
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/my_islamic_todo_app">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);