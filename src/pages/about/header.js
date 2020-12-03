import React from 'react'
import styled from 'styled-components'
import './content.scss'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'


const Heading = styled.h1`
    margin-top: -100px;
`
const BackgroundSection = ({className}) => {
    const data = useStaticQuery(graphql`
        query {
            indexImage4: file(relativePath: { eq: "about/bg1.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1800) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    const imageData = data.indexImage4.childImageSharp.fluid

    return (
        <BackgroundImage fluid={imageData} className={className} >
            <Heading>
                About Me
            </Heading>
        </BackgroundImage>
    )
}

const StyleBackgroundSection = styled(BackgroundSection)`
    box-sizzing: border-box;
    min-height: 100vh;
    padding: 30vw 0 5vw;
    position: relative;
    transform-style: inherit;
    width: 100vw;
    ${this}, ${this}:before {
        background: 50% 50% / cover;
    }
    ${this}::before {
        bottom: 0;
        content: "",
        left:0;
        position: absolute;
        right: 0;
        top: 0;
        display: block;
        background-size: cover;
        transform-origin: center center 0;
        transform: translateZ(-1px) scale(2);
        z-index: -1;
        min-height: 100vh;
    }
        * {
        font-weight: normal;
        letter-spacing: 0.2rem;
        text-align: center;
        margin: 0;
        padding: 1em 0;
    }
`
export default StyleBackgroundSection




