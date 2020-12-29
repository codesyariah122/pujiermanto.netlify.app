import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'


const AboutSection = styled.div`
padding: 100px;
text-align: right;
justify-content: right;
color: black;
margin-right: -6.3rem;
margin-top:-13rem;
`

const ContentDua = () => {
    const dataLogo = useStaticQuery(graphql`
    query {
        file(relativePath: {eq: "portfolio/uji3.png"}) {
            childImageSharp {
                fixed(width: 150, height: 150) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`)
const styles = {
    borderRadius: "50%",
    zIndex: '1',
}
    return (
        <>
         <AboutSection>
             <Img style={styles} fixed={dataLogo.file.childImageSharp.fixed} />  
         </AboutSection>
        </>
    )
}

export default ContentDua