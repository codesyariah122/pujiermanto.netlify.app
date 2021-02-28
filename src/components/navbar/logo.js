import React from 'react'
import styled from 'styled-components'
// import Img from 'gatsby-image'
import { Link } from 'gatsby'
// import { Link, useStaticQuery, graphql } from 'gatsby'
import ImgLogo from '../../images/anjing.png'


const LogoWrap = styled.div`
margin: auto 0;
flex: 0 1 36px;
width:80%;
@media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
}
`

const Logo = () => {
    // const data = useStaticQuery(graphql`
    //     query {
    //         file(name: {eq: "anjing"}, extension: {eq: "png"}) {
    //             childImageSharp {
    //                 fluid(maxWidth: 1000, pngQuality: 100) {
    //                     ...GatsbyImageSharpFluid
    //                 }
    //             }
    //         }
    //     }
    // `)

    return (
        <LogoWrap as={Link} to="/">
            {/*<Img src={`anjing.png`} alt="logo" style={{width: "50px"}}/>*/}
            {/*<ImageLogo/>*/}
            <img src={ImgLogo} with="100" height="70" alt="logos"/>
        </LogoWrap>
    )
}

export default Logo