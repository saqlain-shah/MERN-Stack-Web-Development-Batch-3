import React from 'react';
import './App.css'

import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import WorkSection from './components/WorkSection'; // Import the WorkSection component
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <HomeSection />
            <WorkSection /> {/* Include the WorkSection component */}
            <AboutSection />
            <PortfolioSection />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default App;
