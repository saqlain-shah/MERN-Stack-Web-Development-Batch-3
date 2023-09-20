import React from 'react';
import Header from './components/Portfolio/Header';
import HeroBanner from './components/Portfolio/HeroBanner';
import PortfolioSection from './components/Portfolio/PortfolioSection';
import About from './components/Portfolio/About';
import CounterSection from './components/Portfolio/CounterSection';


function App() {
  return (
    <>
   <Header/>
   <HeroBanner/>
   <About/>
   <CounterSection/>
   <PortfolioSection/>
  

    </>
  );
}

export default App;