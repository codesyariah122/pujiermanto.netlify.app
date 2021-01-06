import React from "react"
import Layout from "../components/layouts/layout"
import '../styles/hero.scss'
import Hero from './homepage/hero'
import Projects from './homepage/Projects'

const IndexPage = () => {

  return (
    <>
        <Layout title="Unexpected Kernel Mode">
          <section className="hero">
            <div className="container">
              <Hero id="hero"/>
            </div>
          </section>
          
          <section className="project">
              <Projects/>
          </section>
        </Layout>
    </>
  )
}

export default IndexPage

