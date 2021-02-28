import React from "react"
import Layout from "../components/layouts/layout"
import '../styles/hero.scss'
import Hero from './about/hero'
import BlogList from './about/bloglist'

const AboutPage = () => {

  return (
    <>
        <Layout title="AboutPage | Unexpected">
          <section className="hero">
            <div className="container">
              <Hero id="hero"/>
            </div>
          </section>
          
          <section className="project">
              <BlogList/>
          </section>
        </Layout>
    </>
  )
}

export default AboutPage

