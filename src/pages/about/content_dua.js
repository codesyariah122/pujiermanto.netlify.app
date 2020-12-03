import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'


const AboutSection = styled.div`
padding: 50px;
text-align: center;
justify-content: center;
color: black;
margin-top: 5.5rem;
`

const ContentDua = () => {
    const dataLogo = useStaticQuery(graphql`
    query {
        file(relativePath: {eq: "puji.jpg"}) {
            childImageSharp {
                fixed(width: 250, height: 250) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`)
const styles = {
    borderRadius: "50%",
    marginTop: "12rem",
    zIndex: '1'
}
    return (
        <>
         <AboutSection>
             <Img style={styles} fixed={dataLogo.file.childImageSharp.fixed} />  
             <h1 css={{color:'white'}}>
                 I'am Developer | FullStack | FrontEnd
             </h1>
         </AboutSection>
        </>
    )
}

export default ContentDua