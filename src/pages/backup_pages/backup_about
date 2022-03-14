import React from 'react'
import {graphql} from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Layout from '../components/layouts/layout'
import Author from './about/author'
import Blog from './about/blog'

export const pageQuery = graphql`
  query {
    indexImage1: file(relativePath: { eq: "homepage/bg2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`;

const AboutPage = (props) => {

const imgFile = {
  "satu": props.data.indexImage1.childImageSharp.fluid,
}

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

	return (
	<>
	<Layout title="About Page">
  
        <BackgroundImage
              fluid={imgFile.satu}
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

            <div class="concept blog">
              <div class="content">
                  <Blog/>
              </div>
            </div>

            <div class="concept concept-seven">
                <Author/>
            </div>
    </Layout>   	
    </>
	)
}

export default AboutPage
