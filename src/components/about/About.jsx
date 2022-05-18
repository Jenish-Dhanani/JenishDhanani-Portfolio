import React from 'react'
import './About.css'
import me from '../../assets/me-about.jpg'
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
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur ipsam temporibus vero eveniet corporis cum, nisi esse necessitatibus, a, fuga ad? Nam temporibus placeat ratione voluptatum cumque fuga omnis atque?
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export {About}