import React from "react"
import Layout from "../components/layout"
import styled from 'styled-components'
import { css } from "@emotion/core"
import BackgroundImage from 'gatsby-background-image'
import { graphql } from 'gatsby'

const IndexPage = (props) => {

    
  const BgImg2 = styled.div`
    display: flex;
    grid: 100% / repeat(7, 1fr);
    padding: 5em 15em;
  `

  const BgImg5 = styled.div`
    display: flex;
    grid: 100% / repeat(7, 1fr);
    padding: 5em 15em;
  `
  return (
        <Layout>
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
            fluid={props.data.indexImage2.childImageSharp.fluid}>
              <div class="concept concept-five">
                  <h1 class="word"><span class="char">I</span><span class="char">N</span><span class="char"></span><span class="char">M</span><span class="char">Y</span><span class="char">P</span><span class="char">O</span><span class="char">R</span><span class="char">T</span><span class="char">F</span><span class="char">O</span><span class="char">L</span><span class="char">I</span><span class="char">O</span>
                    </h1>
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
    } 
  }
`;