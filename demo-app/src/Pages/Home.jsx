import React from "react";
import Header from "../components/Portfolio/Header";
import HeroBanner from "../components/Portfolio/HeroBanner";
import About from "../components/Portfolio/About";
import Service from "../components/Portfolio/Service";
import CounterSection from "../components/Portfolio/CounterSection";
import PortfolioSection from "../components/Portfolio/PortfolioSection";
import Testomonials from "../components/Portfolio/Testomonials";
import Contact from "../components/Portfolio/Contact";


const Home = () => {
    return (

        <React.Fragment>

            <Header />
            <HeroBanner />
            <About />
            <Service />
            <CounterSection />
            <PortfolioSection />
            <Testomonials />
            <Contact />


        </React.Fragment>
    )
}

export default Home

