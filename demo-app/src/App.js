import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import ContactUs from "./Pages/ContactUs";
import ParentComponent from "./components/others/ParentComponent";

function App() {
  return (
    <>
      <ParentComponent />
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
