import React from 'react'
import './footer.css'
import {AiOutlineLinkedin} from "react-icons/ai"
import {FiInstagram} from "react-icons/fi"
import {IoLogoTwitter} from "react-icons/io"


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">ANSHIKA GUPTA</a>

      <ul className="permalinks">
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/anshika-gupta-644501214" ><AiOutlineLinkedin/></a>
        <a href="https://twitter.com/Anshika15090814"><IoLogoTwitter/></a>
        <a href="https://www.instagram.com/anshika_gupta0016/"><FiInstagram/></a>

      </div>

      <div className="footer__copyright">
        <small>&copy; ANSHIKA GUPTA</small>
      </div>
    </footer>
  )
}

export default Footer