import React from 'react'
import '../CSS/Skills.css'
import { Title } from './Title'

import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import js from '../assets/images/javaScript.png'
import react from '../assets/images/react.png'
import bootstrap from '../assets/images/bootstrap.png'
import tailwind from '../assets/images/tailwind.png'

import nodejs from '../assets/images/nodejs.png'
import express from '../assets/images/express.png'
import express_dark from '../assets/images/express_dark.png'

import mongoDB from '../assets/images/mongoDB.png'
import mongoose from '../assets/images/mongoose.png'

import git from '../assets/images/git.png'
import git_dark from '../assets/images/git_dark.png'
import github from '../assets/images/github.png'
import figma from '../assets/images/figma.png'
import vscode from '../assets/images/vs_code.png'

export const Skills = ({ theme }) => {
    return (
        <>
            <section className='Skills-section' id='skills'>
                <Title text={"My Skills."} />
                <p style={{ textAlign: "center", marginBottom: "20px" }}>Technologies I use to build modern and scalable web applications.</p>
                <div className="Skills-content">
                    <h1>Frontend</h1>
                    <div className='Skills'>

                        <div className='Skills-cont'>
                            <div className="skill"><div className="skill-img-cont"><img src={html} alt="HTML logo" /></div><p>HTML</p></div>
                            <div className="skill"><div className="skill-img-cont"><img src={css} alt="CSS logo" /></div><p>CSS</p></div>
                            <div className="skill"><div className="skill-img-cont"><img src={js} alt="JavaScript logo" /></div><p>JavaScript</p></div>
                            <div className="skill"><div className="skill-img-cont"><img src={react} alt="React JS logo" /></div><p>React Js</p></div>
                            <div className="skill"><div className="skill-img-cont"><img src={bootstrap} alt="Bootstrap logo" /></div><p>Bootstrap</p></div>
                            <div className="skill"><div className="skill-img-cont"><img src={tailwind} alt="Tailwind CSS logo" /></div><p>Tailwind CSS</p></div>
                        </div>

                    </div>

                    <div className='backend-db'>

                        <div className='Skills backend-db1'>
                            <h1>Backend</h1>
                            <div className='Skills-cont'>
                                <div className="skill"><div className="skill-img-cont"><img src={nodejs} alt="Node JS logo" /></div><p>Node JS</p></div>
                                {theme == "dark" ? <div className="skill"><div className="skill-img-cont"><img src={express} alt="Express JS logo" /></div><p>Express JS</p></div> : <div className="skill"><div className="skill-img-cont"><img src={express_dark} alt="html" /></div><p>Express JS</p></div>}
                            </div>

                        </div>

                        <div className='Skills'>
                            <h1>Database</h1>
                            <div className='Skills-cont'>
                                <div className="skill"><div className="skill-img-cont"><img src={mongoDB} alt="Mongo DB logo" /></div><p>Mongo DB</p></div>
                                <div className="skill"><div className="skill-img-cont"><img src={mongoose} alt="Mongoose logo" /></div><p>Mongoose</p></div>
                            </div>

                        </div>
                    </div>


                    <div className='Skills'>
                        <h1> Tools </h1>
                        <div className='Skills-cont'>
                            {theme == "dark" ? <div className="skill"><div className="skill-img-cont"><img src={git} alt="Git logo" /></div><p>Git</p></div> :
                                <div className="skill"><div className="skill-img-cont"><img src={git_dark} alt="Git logo" /></div><p>Git</p></div>}
                            <div className="skill"><div className="skill-img-cont"><img src={github} alt="Github logo" /></div><p>Github</p></div>
                            <div className="skill"><div className="skill-img-cont"><img src={figma} alt="Figma logo" /></div><p>Figma</p></div>
                            <div className="skill"><div className="skill-img-cont"><img src={vscode} alt="VS Code logo" /></div><p>VS Code</p></div>
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}
