// App.js (using React Router v6)
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SignUp from "./components/Register.jsx";
import SignIn from "./components/Login.jsx";

function App() {
  return (
    <BrowserRouter>
      <div>


   

        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
