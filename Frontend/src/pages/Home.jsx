import React from 'react'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import { Projects } from '../components/Projects'
import { Helmet } from 'react-helmet-async'

export const Home = ({ theme }) => {
  return (
    <div>

      <Helmet>
        <title>Abdullah Khan | Full Stack Developer</title>

        <meta
          name="description"
          content="Abdullah Khan is a Full Stack Developer specializing in React, Node.js, Express.js and MongoDB. Explore his projects, skills and web development work."
        />

        <meta
          name="keywords"
          content="Abdullah Khan, Full Stack Developer, React Developer, Node.js Developer, MERN Stack Developer, JavaScript Developer"
        />

        <meta name="author" content="Abdullah Khan" />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Abdullah Khan | Full Stack Developer"
        />

        <meta
          property="og:description"
          content="Full Stack Developer specializing in React, Node.js, Express.js and MongoDB."
        />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      <Hero />
      <About />
      <Skills theme={theme} />
      <Projects />

    </div>
  )
}
