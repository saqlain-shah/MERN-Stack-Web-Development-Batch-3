
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");

// Use createRoot to render your app.
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
