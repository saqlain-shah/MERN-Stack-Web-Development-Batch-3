import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Table from "./components/others/TableAndForm/Table";
import Form from "./components/others/TableAndForm/FormikForm";
import Counter from "./components/others/Counter";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/data-table" element={<Table />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
