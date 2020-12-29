import React from 'react'
import './content_satu.scss'
import styled from 'styled-components'
import {Link, graphql, useStaticQuery} from 'gatsby'


const AboutSection = styled.div`
padding: 50px;
text-align: center;
justify-content: center;
margin-top: 1rem;
`

const Heading = styled.h1`
    font-family: 'Reey Regular';
    font-size: 23px;
    color: #000;
    margin-left:3rem;
`
const HeadingTwo = styled.h1`
    font-size: 16px;
    margin-left: 5rem;
    margin-top:1rem;
    font-family: 'Ubuntu', sans-serif;
    color: #000;
    font-weight: bold;
    z-index: 1;
`

const ContentTiga = () => {
   
    return (

        <AboutSection>
            <Heading>
                Halo Everyone... <br/> 
                Call Me Uji <br/> 
            </Heading>
            <HeadingTwo>
            Are you Need Developer <br/>
            Please <Link to="/contact" css={{color: 'blue', textDecoration:'none'}}>Contact Me</Link> 
            </HeadingTwo>
        </AboutSection>
    )
}
export default ContentTiga