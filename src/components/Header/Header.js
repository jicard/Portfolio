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
              <a href="/" className="headerBtn">About Me</a>
              <a href="#portfolio" className="headerBtn">Portfolio</a>
              <a href="#contact" className="headerBtn">Contact</a>
              <a href={Resume} download className="headerBtn">Resume</a>
          </div>
        )
}

