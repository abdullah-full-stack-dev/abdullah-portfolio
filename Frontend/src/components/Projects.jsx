import React from 'react'
import '../CSS/Projects.css'
import { project } from '../assets/project'
import { ProjectCard } from './ProjectCard'
import { Title } from './Title'
import { Link } from 'react-router-dom'

export const Projects = () => {

    return (
        <section className='Projects-section' id='projects'>
            <Title text={"Featured Projects."} />
            <p style={{ textAlign: "center", marginBottom: "30px" }}>A selection of projects where I turn ideas into modern, responsive, <br />and functional web experiences.</p>
            <div className="Projects-cont">

                {project.map((project, index) => (
                    <ProjectCard key={index} project={project} className={index >= 8 ? "mobile-hidden-project" : ""} />
                ))}

            </div>
            <div className="all-projects-btn">
                <Link to="/projects">
                    View All Projects
                </Link>
            </div>
        </section>
    )
}
