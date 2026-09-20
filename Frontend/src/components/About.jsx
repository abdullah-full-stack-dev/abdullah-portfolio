import React, { useState } from 'react'
import '../CSS/About.css'
import aboutImg from '../assets/images/photo.jpg'
import { Title } from './Title'

export const About = () => {

    const [showMore, setShowMore] = useState(false)

    return (
        <>
            <section className='About-section' id='about'>
                <Title text={"About Me."} />
                <div className="About-cont">
                    <div className="About-image-cont">
                        <img src={aboutImg} alt="Abdullah Khan - Image" />
                    </div>

                    <div className="About-info-cont">
                        <div className="About-info">
                            <p>I’m <span className='gradient' style={{ fontWeight: "bold" }}>Abdullah Khan</span>, a passionate Full Stack Developer focused on building modern, responsive, and user-friendly web applications.</p>
                            <div className={`about-more ${showMore ? "show" : ""}`}>
                                <p>I work with technologies like HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Express.js, and MongoDB to create complete web experiences — <br />from intuitive frontend interfaces to scalable backend systems and APIs.</p>
                                <p>I enjoy turning ideas into functional, visually polished products while continuously improving my development skills and exploring new technologies.</p>
                                <p><span className='gradient' style={{ fontWeight: "bold" }}>My goal</span>: Build meaningful digital products that are fast, reliable, responsive, and enjoyable to use.</p>
                            </div>
                            <button className='read-more-btn' onClick={() => setShowMore(!showMore)}>
                                {showMore ? "Read Less" : "Read More"}
                            </button>

                            <div className='badges'><h3 >Full Stack Developer</h3>  <h3 >MERN Stack</h3></div>
                            <div className='badges'><h3 >Responsive Web Design</h3>  <h3 >Problem Solver</h3></div>
                            <div className='badges' id='optional'><h3 >Frontend Development</h3>  <h3 >Backend Development</h3></div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
