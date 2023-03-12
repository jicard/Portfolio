import React from 'react'
import profilePic from '../../assets/Images/green.jpeg'
import kidPic from '../../assets/Images/kid.jpeg'
import './Bio.css'

export default function aboutMe() {
  return (
    <div className='aboutMeWrapper'>
      <div className='profilePicContainer'>
      <img className='profilePic' src={profilePic} alt='' 
      onMouseOver={e => (e.currentTarget.src = kidPic)}
      onMouseOut={e => (e.currentTarget.src = profilePic)}/>
      </div>
      <div className='myName'>
      <p>Josh Icard - Full-Stack Web Developer</p>
      </div>
      <div className='myBio'>
      <p>
      Logistics - Warehouse Management - Web Development - Databases
      </p>
      </div>
    </div>
  )
}
