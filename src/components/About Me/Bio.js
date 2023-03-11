import React from 'react'
import profilePic from '../../assets/Images/green-hat-hoodie.jpeg'
import './Bio.css'

export default function aboutMe() {
  return (
    <div className='aboutMe'>
      <img className='profilePic' src={profilePic} alt=''/>
      <p>👋 Hi! I'm Josh Icard, a Full Stack Web Developer in North Carolina.</p>
      <p>💼 I'm currently a Logistics Supervisor at Reeb Millwork, while studying full-stack web devlopment to establish a career in Operations IT.</p>
      <p>📈 My goal is to turn my Warehouse Management and IT experience into a lifetime of improving processes, promoting efficiency, and teaching others.</p>
    </div>
  )
}
