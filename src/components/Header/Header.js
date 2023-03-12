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
              <a href="/Portfolio/#aboutMe" className="headerBtn">About Me</a>
              <a href="/Portfolio/#portfolio" className="headerBtn">Portfolio</a>
              <a href="/Portfolio/#contact" className="headerBtn">Contact</a>
              <a href={Resume} download className="headerBtn">Resume</a>
          </div>
        )
}

