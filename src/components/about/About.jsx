import React from 'react';
import "./about.css";
import ME from "../../assets/about-me.jpg"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="my image" />
          </div>
        </div>

        <div className="about__content">
            <p>
              I am a Web Development enthusiast trying new things and improving my skills. I have knowledge about all the basics required in the Web Development field. I have strong creative and analytical skills, problem-solving skills and a keen eye for detail. Dedicated to delivering high-quality results.
            </p>
            <div className='extra'>
            <a href="#portfolio" className="btn btn-primary">MY PROJECTS</a>
            </div>
        </div>

      </div>
    </section>
  )
}

export default About