import React from 'react'
import Resume from "../../assets/resume.pdf"

//highlight navbar link on hover and when looking at that content
//link needs to be to same page, no page reloading
//About Me is selected by default (on page load)

export default function Header() {
  return (
    <div className='navBar'>
        <p>Josh Icard</p>
        <p className="headerBtn">About Me</p>
        <p className="headerBtn">Portfolio</p>
        <p className="headerBtn">Contact</p>
        <a href={Resume} download className="headerBtn">Resume</a>


    </div>
  )
}
