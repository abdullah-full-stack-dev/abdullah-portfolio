import React from 'react'
import '../CSS/Hero.css'
import img from '../assets/images/photo.jpg'
import { FaArrowRightLong, FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { MdOutlineMail } from 'react-icons/md'
import { GoDotFill } from 'react-icons/go'
import { Link } from 'react-router-dom'


export const Hero = () => {

  const skills = [
    "FULL STACK DEVELOPER",
    "REACT DEVELOPER",
    "MERN STACK",
    "UI/UX DESIGNER",
  ];

  return (
    <>
      <section className='hero-section' id="home">

        <div className="hero-cont">

          {/* Image */}
          <div className="hero-img">
            <img src={img} alt="Abdullah Khan - Image" />
            <div className="sec-hero-cont gradient">
              <p className='gradient'>FULL STACK DEV</p>
            </div>
          </div>

          <div className="hero-info">
            <h3>FULL STACK DEVELOPER</h3>
            <h1>Building Digital <span className='gradient'>Experiences</span> <br /> That Make an Impact.</h1>
            <p>I’m <span className='gradient' style={{ fontWeight: "bold" }}>Abdullah Khan</span>, a Full Stack Developer focused on building modern, responsive, <br /> and scalable web applications with clean design and reliable functionality.</p>
            <div className='hero-btn-cont'>
              <Link to={"/projects"}><button className='hero-btn btn1'>View My Work</button></Link>
              <div className='btn2-cont'>
                <a href="/Abdullah_Khan_Resume.pdf" target="_blank" rel="noopener noreferrer"><button className='hero-btn btn2'>Download Resume <FaArrowRightLong className='download-icon' /></button></a>
              </div>
            </div>
            <p className='about-point'>● Available for opportunities</p>
            <ul className="hero-social-icons">

              <li className='social-icon'><a href="https://mail.google.com/mail/?view=cm&fs=1&to=abdullahkhannn7750@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email me"><MdOutlineMail /></a></li>

              <li className='social-icon' ><a href="https://github.com/abdullah-full-stack-dev/abdullah-full-stack-dev.git" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
              <li className='social-icon'><a href="https://www.linkedin.com/in/abdullah-khan-9a2647406" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
            </ul>

          </div>

        </div>

        <div className="marquee">
          <div className="marquee-track">
            {[...skills, ...skills].map((skill, index) => (
              <span className="marquee-item" key={index}>
                {skill}
                <b><GoDotFill /></b>
              </span>
            ))}
          </div>
        </div>

      </section>
    </>
  )
}
