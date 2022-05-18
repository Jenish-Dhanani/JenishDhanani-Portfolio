import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin, AiOutlineWhatsApp} from 'react-icons/ai'

const Contact = ()=>{

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact-container">
                <div className="contact-options">
                    <div className="contact-option">
                        <MdOutlineEmail className='contact-option-icon'/>
                        <h4>Email</h4>
                        <h5>djdhananijenish777@gmail.com</h5>
                        <a href="mailto:djdhananijenish777@gmail.com">Send a message</a>
                    </div>
                    <div className="contact-option">
                        <AiOutlineLinkedin className='contact-option-icon'/>
                        <h4>Linkedin</h4>
                        <h5>Jenish Dhanani</h5>
                        <a href="https://www.linkedin.com/in/jenish-dhanani-a3b474202/" target="_blank" rel="noreferrer">Connect Now</a>
                    </div>
                    <div className="contact-option">
                        <AiOutlineWhatsApp className='contact-option-icon'/>
                        <h4>Whatsapp</h4>
                        <h5>+91 97122 94506</h5>
                        <a href="https://wa.me/919712294506?text=Hello,%20Jenish%20Dhanani" target="_blank" rel="noreferrer">Send a message</a>
                    </div>
                </div>
                <form action="https://formspree.io/f/moqrybve" method='post'>
                    <input type="text" name="name" placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export {Contact}