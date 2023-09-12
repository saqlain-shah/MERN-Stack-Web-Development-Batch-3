import React from "react";
import { Header } from "./components/Portfolio/Header";
import HeroBanner from "./components/Portfolio/HeroBanner";
import { About } from "./components/Portfolio/About";
import { Service } from "./components/Portfolio/Service";

function App() {
  return (
    <React.Fragment>
      <Header />
      <HeroBanner />
      <About />
      <Service />
    </React.Fragment>
  );
}

export default App;
