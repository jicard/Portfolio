import React from 'react'
import { BsLinkedin, BsTwitter, BsDiscord } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footerLinksContainer'>
        <a alt="GitHub" href="https://www.linkedin.com/in/joshicard/" target="_blank"><BsLinkedin /></a>
        <a alt="LinkedIn" href="https://github.com/jicard" target="_blank"><FaGithub /></a>
        <a alt="Twitter" href="https://twitter.com/icardjoshdev" target="_blank"><BsTwitter /></a>
        <a alt="Discord" href="https://discordapp.com/users/460946925160759327" target="_blank"><BsDiscord /></a>
    </div>
  )
}
