import React from 'react'
import Resume from "../../assets/resume.pdf"
import { HashLink as Link } from 'react-router-hash-link'
import './Header.css'
//import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'
//highlight navbar link on hover and when looking at that content
//link needs to be to same page, no page reloading
//About Me is selected by default (on page load)

export default function Header() {
  return (
    <div className='navBar'>
        <Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to='aboutMe' className="headerBtn">About Me</Link>
        <Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to='portfolio' className="headerBtn">Portfolio</Link>
        <Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to='contact' className="headerBtn">Contact</Link>
        <a href={Resume} download className="headerBtn">Resume</a>
    </div>
  )
}
