import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import ContactUs from "./Pages/ContactUs";
import ParentComponent from "./components/others/ParentComponent";
import MultipleProductCard from "./components/others/MultipleProductCard";
import SingleProductCard from "./components/others/SingleProductCard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MultipleProductCard />} />
          <Route path="/product-detail" element={<SingleProductCard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/parent-component" element={<ParentComponent />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
