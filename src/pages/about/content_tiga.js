import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'


const AboutSection = styled.div`
padding: 50px;
text-align: center;
justify-content: center;
margin-top: 12.5rem;
`

const Heading = styled.h1`
    font-family: 'SpringSakura';
    font-size: 56px;
    color: #fff;
`
const HeadingTwo = styled.h1`
    font-size: 26px;
    margin-top: -2rem;
    margin-bottom: 3rem;
    font-family: 'Ubuntu', sans-serif;
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
            Please <Link to="/contact" css={{color: 'white', textDecoration:'none'}}>Contact Me</Link> 
            </HeadingTwo>
        </AboutSection>
    )
}
export default ContentTiga