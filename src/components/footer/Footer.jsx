import React from 'react'
import './Footer.css'
import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'

const Footer = ()=>{

    return (
        <footer>
            <span className='footer-logo'>Jenish Dhanani</span>
            <ul className='footer-links'>
                <li><a href="#header">Home</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer--socials">
                <a href="https://github.com/Jenish-Dhanani" target="_blank" rel="noreferrer"><AiFillGithub/></a>
                <a href="https://www.linkedin.com/in/jenish-dhanani-a3b474202/" target="_blank" rel="noreferrer"><AiFillLinkedin/></a>
                <a href="https://www.instagram.com/jenish_dhanani_90/" target="_blank" rel="noreferrer"><AiFillInstagram/></a>
            </div>
            <div className='footer-copyright'>
                <span>&copy; Jenish Dhanani.</span>
            </div>
        </footer>
    )
}

export {Footer}