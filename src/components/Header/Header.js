import React from 'react'
import './Header.css'
import { NavLink } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//
//highlight navbar link on hover and when looking at that content
//link needs to be to same page, no page reloading
//About Me is selected by default (on page load)
export default function Header() {
        return (
            <>
            <ul className='navBar'>
            <li>
                <NavLink to="aboutMe">About Me</NavLink>
            </li>
            <li>
                <NavLink to="projects">Portfolio</NavLink>
            </li>
            <li>
                <NavLink to="contact">Contact</NavLink>
            </li>
            <li>
                <NavLink to="resume">Resume</NavLink>
            </li>
            </ul>
            </>
        )
}
/*
<ul className='navBar'>
    <li>
        <NavLink activeStyle={{color:'#5754a8'}} to="Portfolio/#aboutMe">About Me</NavLink>
    </li>
    <li>
        <NavLink activeStyle={{color:'#5754a8'}} to="#Portfolio/#portfolio">Portfolio</NavLink>
    </li>
    <li>
        <NavLink activeStyle={{color:'#5754a8'}} to="#Portfolio/#contact">Contact</NavLink>
    </li>
    <li>
        <NavLink activeStyle={{color:'#5754a8'}} to="#Portfolio/#resume">Resume</NavLink>
    </li>
</ul>
*/
/*
<div className='navBar'>
    <a href="/Portfolio/#aboutMe" className="headerBtn">About Me</a>
    <a href="/Portfolio/#portfolio" className="headerBtn">Portfolio</a>
    <a href="/Portfolio/#contact" className="headerBtn">Contact</a>
    <a href="/Portfolio/#resume" className="headerBtn">Resume</a>
</div>
*/
