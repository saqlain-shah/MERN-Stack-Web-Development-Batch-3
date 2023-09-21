import React from 'react'
import Header from './components/Potefolio/Header'
import HeroSection from './components/Potefolio/Herosection'
import About from './components/Potefolio/About'
import Skills from './components/Potefolio/Skills'
import Resume from './components/Potefolio/Resume'
import Portfolio from './components/Potefolio/Portfolio'
import Services from './components/Potefolio/Services'
import Testimonials from './components/Potefolio/Testimoniols'


export default function App() {
  return (
    <>
   <Header/>
   <HeroSection/>
   <About/>
   <Skills/>
   <Resume/>
   <Portfolio/>
   <Services/>
   <Testimonials/>
    </>
  )
}
