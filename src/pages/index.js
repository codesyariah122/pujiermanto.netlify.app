import React from "react"
import Layout from "../components/layout"
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from 'gatsby'
import Author from './homepage/author'

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



  return (
        <Layout>
            <div class="concept concept-one">
              <div class="hover hover-1"></div>
              <div class="hover hover-2"></div>
              <div class="hover hover-3"></div>
              <div class="hover hover-4"></div>
              <div class="hover hover-5"></div>
              <div class="hover hover-6"></div>
              <div class="hover hover-7"></div>
              <div class="hover hover-8"></div>
              <div class="hover hover-9"></div>
                  <h1 css={{fontFamily:'SpringSakura'}}>Moshi ~ moshi .. <br/> | , | </h1>
            </div> 
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

          <BackgroundImage 
            fluid={props.data.indexImage2.childImageSharp.fluid}
          >
              <BgImg5>
              <div class="concept concept-five">
                  <h1 class="word">
                    <span class="char">I</span><span class="char">N</span><span class="char"></span><span class="char">M</span><span class="char">Y</span><span class="char">P</span><span class="char">O</span><span class="char">R</span><span class="char">T</span><span class="char">F</span><span class="char">O</span><span class="char">L</span><span class="char">I</span><span class="char">O</span>
                  </h1>
              </div>
              </BgImg5>
          </BackgroundImage>

          {/* <div class="concept concept-six">
            <h1 class="word"><span class="char">O</span><span class="char">C</span><span class="char">E</span><span class="char">A</span><span class="char">N</span>
            </h1>
          </div> */}

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