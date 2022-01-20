import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const size = 42
  return (
    <div className='footer'>
      <div>
        <p>Created By Blake Archer</p>
        <p id='contact-me'>blarcher31@gmail.com</p>
      </div>

      <div className='follow-me'>
        <h5>Follow Me</h5>
        <a href='https://github.com/blarcher31'>
          <FaGithub size={size} />
        </a>
        <a href='https://www.linkedin.com/in/archer-blake/'>
          <FaLinkedin size={size} />
        </a>
      </div>
    </div>
  )
}

export default Footer
