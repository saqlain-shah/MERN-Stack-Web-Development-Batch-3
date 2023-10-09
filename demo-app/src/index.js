import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { userData } from "./components/others/TableAndForm/FormikForm";
export const UserDataContext = createContext();
const rootElement = document.getElementById("root");

// Use createRoot to render your app.
const root = ReactDOM.createRoot(rootElement);
root.render(
  <UserDataContext.Provider value={userData}>
    <App />
  </UserDataContext.Provider>
);
