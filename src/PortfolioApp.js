import React from "react";
import "./PortfolioApp.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import backgroundImage from "./Images/office.webp"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Bio from "./components/About Me/Bio";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";

function App() {
    
    return (
        <>
        <Router basename={process.env.PUBLIC_URL}>
        <div className='homepageWrap'>
                <img className='homepageBackground' src={backgroundImage} alt=''/>
            <div className='homepageContent'>
                <Header />
                    <Routes>
                        <Route exact path="/" element={<Bio />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contactme" element={<Contact />} />
                        <Route path="/resume" element={<Resume />} />
    
                    </Routes>
                <Footer />
            </div>
        </div>
        </Router>
        </>
        
      );
  }
export default App;


