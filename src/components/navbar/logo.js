import React from 'react'
import styled from 'styled-components'
// import Img from 'gatsby-image'
import { Link } from 'gatsby'
// import { Link, useStaticQuery, graphql } from 'gatsby'
// import ImgLogo from '../../images/anjing.png'
import ImgLogo from '../../images/anjing.png'


const LogoWrap = styled.div`
margin: auto 0;k
width:80%;
@media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
    img {
        height: 11vh;
    }
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
            <img src={ImgLogo} with="90" height="60" alt="logos"/>
        </LogoWrap>
    )
}

export default Logo