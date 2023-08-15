import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from "react-icons/ai"
import {BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jb7e48n', 'template_tf2clw6', form.current, 'zJoGLEyLxyw7jj_As')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>anshikaguptaa16@gmail.com</h5>
            <a href="mailto:anshikaguptaa16@gmail.com" >Send message</a>
          </article>
          <article className="contact__option">
          <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Anshika Gupta</h5>
            <a href="https://www.linkedin.com/in/anshika-gupta-644501214" target="_blank" rel="noreferrer">Send message</a>
          </article>
          <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>Anshika Gupta</h5>
            <a href="https://api.whatsapp.com/send?phone=916005630226" target="_blank" rel="noreferrer" >Send message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <div className='extra'>
          <button type="submit" className="btn btn-primary ">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact