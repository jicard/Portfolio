import React from 'react'
import backgroundImage from "../assets/Images/office.webp"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Bio from "../components/About Me/Bio";
import Portfolio from "../components/Portfolio/Portfolio";
import ContactForm from "../components/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
export default function Homepage() {
  return (
    <div className='homepageWrap'>
    <img className='homepageBackground' src={backgroundImage} alt=''/>
      <div className='homepageContent'>
        <Header />
        <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<Bio />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        </Router>
        <Footer />
      </div>
    </div>
  )
}
