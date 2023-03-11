import React, { Component } from 'react'
import Resume from "../../assets/resume.pdf"
import './Header.css'
import { Link } from 'react-router-dom'


//highlight navbar link on hover and when looking at that content
//link needs to be to same page, no page reloading
//About Me is selected by default (on page load)
export default function Header() {
        return (
          <div className='navBar'>
              <Link to="/" className="headerBtn">About Me</Link>
              <Link to="/portfolio" className="headerBtn">Portfolio</Link>
              <Link to="/contact" className="headerBtn">Contact</Link>
              <a href={Resume} download className="headerBtn">Resume</a>
          </div>
        )
}

