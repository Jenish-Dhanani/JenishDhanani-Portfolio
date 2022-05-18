import React from 'react'
import Profile from '../../assets/me1.png'
import './Header.css'
import cv from '../../assets/202112106_Jenish_Dhanani.pdf'

import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'

const Header = ()=>{

    return (
        <header id="header">
            <div className="container header-container">
                <h5>Hello I'm</h5>
                <h1>Jenish Dhanani</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <div className='scroll-down'>
                    <a href='#contact'>scroll-down</a>
                </div>
                <div className='cv-div'>
                    <a className='btn' href={cv} download="202112106_Jenish_Dhanani.pdf">Download CV</a>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
                <div className="socials">
                    <a href="https://github.com/Jenish-Dhanani" target="_blank" rel="noreferrer"><AiFillGithub/></a>
                    <a href="https://www.linkedin.com/in/jenish-dhanani-a3b474202/" target="_blank" rel="noreferrer"><AiFillLinkedin/></a>
                    <a href="https://www.instagram.com/jenish_dhanani_90/" target="_blank" rel="noreferrer"><AiFillInstagram/></a>
                </div>

                <div className="me">
                    <img src={Profile} alt="profile" />
                </div>
            </div>
        </header>
    )
}

export {Header}