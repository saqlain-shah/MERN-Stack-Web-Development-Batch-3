import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import ContactUs from "./Pages/ContactUs";

import ParentComponent from "./components/others/ParentComponent";
import MultipleProductCard from "./components/others/MultipleProductCard";
import SingleProductCard from "./components/others/SingleProductCard";
import Table from "./components/others/TableAndForm/Table";
import Form from "./components/others/TableAndForm/FormikForm";
import NewForm from "./components/others/TableAndForm/Form";

function App() {
  const data = "dfsdfsdd";
  return (
    <>
      <Router>
        <Routes>
          <Route path="/form" element={<NewForm />} />
          <Route path="/" element={<Form data={data} />} />
          <Route path="/data-table" element={<Table />} />
          <Route path="/all-product" element={<MultipleProductCard />} />
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
