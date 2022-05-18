import React from 'react'
import './About.css'
import me from '../../assets/me-about1.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = ()=>{

    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about-container">
                <div className="about-me">
                    <div className="about-me-img">
                        <img src={me} alt="" />
                    </div>
                </div>
                <div className="about-content">
                    <div className="about-cards">
                        <div className="about-card">
                            <FaAward className='about-icon'/>
                            <h5>Experience</h5>
                            <span>Fresher</span>
                        </div>
                        <div className="about-card">
                            <VscFolderLibrary className='about-icon'/>
                            <h5>Projects</h5>
                            <span>4+</span>
                        </div>
                        <div className="about-card">
                            <FaAward className='about-icon'/>
                            <h5>Experience</h5>
                            <span>Fresher</span>
                        </div>
                    </div>
                    <p>
                        I am Jenish Dhanani, Seeking a beginner role to enhance and explore my technical knowledge gained at Veer Narmad South Gujarat University in the last three years. I hold a BCA degree from Sutex Bank College Of Computer Science And Application college, and currently I am studying "MSc. IT" in Dhirubhai Ambani Institute Of Information And Communication Technology (DAIICT). I am skilled in Graphics, frontend programming as well as backend programming and also in database management.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export {About}