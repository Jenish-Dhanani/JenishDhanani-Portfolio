import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = ()=>{

    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience-container">
                <div className="experience-frontend">
                    <h2>Frontend Development</h2>
                    <div className="experience-content">
                        <div className='experience-details'>
                            <BsPatchCheckFill className='experience-details-icon'/>
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </div>
                        <div className='experience-details'>
                            <BsPatchCheckFill className='experience-details-icon'/>
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </div>
                        <div className='experience-details'>
                            <BsPatchCheckFill className='experience-details-icon'/>
                            <div>
                                <h4>Javascript</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </div>
                        <div className='experience-details'>
                            <BsPatchCheckFill className='experience-details-icon'/>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </div>
                        <div className='experience-details'>
                            <BsPatchCheckFill className='experience-details-icon'/>
                            <div>
                                <h4>Angular</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </div>
                        <div className='experience-details'>
                            <BsPatchCheckFill className='experience-details-icon'/>
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </div>
                    </div>
                </div>

                {/* End of frontend */}

                <div className="experience-backend">
                    <h2>Backtend Development</h2>
                    <div className="experience-content">
                        <div className='experience-details'>
                            <BsPatchCheckFill className='experience-details-icon'/>
                            <div>
                                <h4>Node JS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </div>
                        <div className='experience-details'>
                            <BsPatchCheckFill className='experience-details-icon'/>
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </div>
                        <div className='experience-details'>
                            <BsPatchCheckFill className='experience-details-icon'/>
                            <div>
                                <h4>MySql</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </div>
                    </div>
                    <h2 style={{marginTop:"2rem"}}>Other Programming Languages</h2>
                    <div className="experience-content">
                        <div className='experience-details'>
                            <BsPatchCheckFill className='experience-details-icon'/>
                            <div>
                                <h4>C, C++, JAVA</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export {Experience}