import React from 'react'
import '../CSS/Projects.css'
import { LuSquareArrowOutUpRight } from 'react-icons/lu';

export const ProjectCard = ({ project, className = "" }) => {

    return (
        <div className={`project ${className}`}>
            <div className='project-img' >
                <img src={project.img} alt={`${project.title} project preview`} />
            </div>

            <div className='project-content'>
                <h2>{project.title}</h2>
                <div>
                    <p>{project.description}</p>
                    <span><b>Tech</b>: {project.tech}</span>
                </div>
            </div>

            <div className='btns'>
                <div className='btns-cont'>
                    <a href={project.live} target='_blank' rel="noopener noreferrer">Live Demo <LuSquareArrowOutUpRight /></a>
                    <a href={project.github} target='_blank' rel="noopener noreferrer">GitHub </a>
                </div>
            </div>

        </div>
    )
}
