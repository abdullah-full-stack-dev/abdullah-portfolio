import React from 'react'
import '../CSS/Footer.css'
import { Link, useNavigate } from 'react-router-dom'

export const Footer = () => {

  const scrollUp = () => {
    window.scrollTo({
      behavior: "auto",
      top: 0
    })
  }

  const navigate = useNavigate();

  return (
    <>
      <div className="footer-section">

        <div className='footer-cont'>
          <div className='footer-part'>
            <div className='footer-logo-cont'>
              <Link to={"/"} onClick={scrollUp}><h1 className='gradient'>ABDULLAH.</h1></Link>
            </div>
            <p className='footer-tagline'>Full Stack Developer</p>

            <p>Building modern, responsive and user-friendly
              web applications with <br />React, Node.js,
              Express.js and MongoDB.</p>

          </div>

          <div className='footer-links-cont'>
            <div className='footer-part'>
              <p>Quick Links</p>
              <ul>
                <Link to={"/"} onClick={scrollUp}><li>Home</li></Link>
                <li onClick={() => navigate("/")}><a href="#about">About</a></li>
                <li onClick={() => navigate("/")}><a href="#skills">Skills</a></li>
                <li onClick={() => navigate("/")}><a href="#projects">Projects</a></li>
                <Link to={"/contact"}><li>Contact</li></Link>
              </ul>
            </div>
            <div className='footer-part'>
              <p>Connect</p>
              <ul>
                <li><a href="https://github.com/abdullah-full-stack-dev/abdullah-full-stack-dev.git" target='_blank'>GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/abdullah-khan-9a2647406" target='_blank'>LinkedIn</a></li>
                <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=abdullahkhannn7750@gmail.com" target='_blank'>Email</a></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <div>
            <p>© 2026 Abdullah Khan</p>
          </div>

          <div>
            <button onClick={scrollUp}>Back to Top ↑</button>
          </div>
        </div>

      </div>

    </>
  )
}
