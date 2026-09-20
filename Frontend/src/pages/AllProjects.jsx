import React, { useState } from 'react'
import '../CSS/AllProjects.css'
import '../CSS/Projects.css'
import { ProjectCard } from '../components/ProjectCard'
import { project } from '../assets/project'
import { Title } from '../components/Title'
import { Helmet } from 'react-helmet-async'

export const AllProjects = () => {

    const [search, setSearch] = useState("")

    const filteredProjects = project.filter((item) => {
        const searchText = `
        ${item.title}
        ${item.description}
        ${item.tech}
        `.toLowerCase()

        return searchText.includes(search.toLowerCase())
    })

    return (
        <>

            <Helmet>
                <title>Projects | Abdullah Khan</title>

                <meta
                    name="description"
                    content="Explore web development projects built by Abdullah Khan using React, Node.js, Express.js, MongoDB and modern web technologies."
                />

                <meta
                    name="keywords"
                    content="Abdullah Khan Projects, React Projects, MERN Projects, Full Stack Projects, Web Development Projects"
                />

                <meta name="author" content="Abdullah Khan" />

                <meta name="robots" content="index, follow" />
            </Helmet>

            <div className='allProjects-section'>
                <Title text={"All Projects."} />
                <p style={{ textAlign: "center", marginBottom: "30px" }}>A <span className='gradient'>collection</span> of projects I've built to explore modern web technologies, <br />solve real-world problems, and strengthen my full-stack development skills.</p>

                <div className="projects-search">
                    <input type="text" placeholder="Search projects..." value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>

                <p className="project-count"> Showing {filteredProjects.length}{" "} {filteredProjects.length === 1 ? "project" : "projects"} </p>

                {filteredProjects.length > 0 ? (
                    <div className="Projects-cont"> {filteredProjects.map((item, index) => (<ProjectCard key={index} project={item} />))} </div>
                ) : (
                    /* No Results */
                    <div className="no-projects"> <h3>No projects found</h3> <p> Couldn't find any project matching "{search}". <br /> Try searching with a different keyword. </p> </div>
                )}
            </div>
        </>
    )
}
