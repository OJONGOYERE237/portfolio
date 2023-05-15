import React from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/About/About';
import Services from './components/services/Services';
import Testimonial from './components/testimonial/Testimonial';
import Header from './components/header/Header';
 

const App = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App; // always export the component as default


