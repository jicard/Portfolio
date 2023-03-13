import React from 'react'
import backgroundImage from "../assets/Images/office.webp"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Bio from "../components/About Me/Bio";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact";
import Resume from "../components/Resume/Resume"
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'

export default function Homepage() {
  return (
    <div className='homepageWrap'>
    <img className='homepageBackground' src={backgroundImage} alt=''/>
      <div className='homepageContent'>
        <Router basename='/'>
        <Header/>
        <Routes>
          <Route element={<Bio />} path="/aboutMe"/>
          <Route element={<Portfolio />} path="projects"/>
          <Route element={<Contact />} path="contact"/>
          <Route element={<Resume />} path="resume"/>
        </Routes>
        <Footer/>
        </Router>
      </div>
    </div>
  )
}
/*
<Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<Bio />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        </Router>
*/
