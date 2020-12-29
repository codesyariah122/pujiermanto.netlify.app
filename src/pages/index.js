import React from "react"
import Layout from "../components/layout"
import '../styles/hero.scss'
import Hero from './homepage/hero'
import Author from './homepage/author'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from 'gatsby'

const IndexPage = (props) => {
    
  const BgImg2 = styled.div`
    display: flex;
    grid: 100% / repeat(7, 1fr);
    padding: 5em 15em;
    @media (max-width: 768px) {
      width: 600px;
      height: 600px;
      padding: 1rem 7rem;
    }
    @media(max-width: 368px) {
      width: 300px;
      height: 800px;
      padding: 0rem 0rem;
    }
  `

  const BgImg5 = styled.div`
    display: flex;
    grid: 100% / repeat(7, 1fr);
    padding: 5em 15em;
    
    @media (max-width: 768px) {
      width: 700px;
      height: 600px;
      padding: 1rem 7rem;
    }
    @media(max-width: 368px) {
      width: 500px;
      height: 900px;
      padding: 0rem 0rem;
    }
  `
  const ContainerBgImg5 = styled.div`
  ${BackgroundImage}::after{
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 1.5), rgba(0, 0, 0, 0));
    position: absolute;
    bottom:0;
  }
  `
  return (
        <Layout title="Unexpected Kernel Mode">
          <section className="hero">
            <div className="container">
              <Hero/>
            </div>
          </section>
          <BackgroundImage
              fluid={props.data.indexImage1.childImageSharp.fluid}
            >
              <BgImg2>
                <div class="concept concept-two">
                    <div class="hover">
                      <h1>W</h1>
                    </div>
                    <div class="hover">
                      <h1>E</h1>
                    </div>
                    <div class="hover">
                      <h1>L</h1>
                    </div>
                    <div class="hover">
                      <h1>C</h1>
                    </div>
                    <div class="hover">
                      <h1>O</h1>
                    </div>
                    <div class="hover">
                      <h1>M</h1>
                    </div>
                    <div class="hover">
                      <h1>E</h1>
                    </div>
                  </div>
                </BgImg2>
            </BackgroundImage>

            <BackgroundImage fluid={props.data.indexImage3.childImageSharp.fluid}>
            <div class="concept concept-seven">
                <Author/>
            </div>
          </BackgroundImage>
        </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    indexImage1: file(relativePath: { eq: "homepage/bg2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    indexImage2: file(relativePath: { eq: "homepage/bg3.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    indexImage3: file(relativePath: { eq: "homepage/bg5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`;