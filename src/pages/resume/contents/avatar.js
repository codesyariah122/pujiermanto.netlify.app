import React from 'react'
import styled from 'styled-components'
// import Img from 'gatsby-image'
import AvatarImg from '../../../images/portfolio/avatar1.jpg'
// import { graphql, useStaticQuery } from 'gatsby'

const Avatar = () => {
    const AvatarWrap = styled.div`
        margin: auto 0;
        flex: 0 1 36px;
        img{
            height: 407px;
        }
    @media (max-width: 768px) and (orientation: landscape) {
            flex: 0 1 25px;
            img{
                width: 225px;
            }
    }

    @media (max-width: 360px) {
            img{
                width: 327.5px;
            }
    }

    `

    // const data = useStaticQuery(graphql`
    //     query {
    //         file: file(relativePath: { eq: "images/portfolio/avatar1.jpg" }) {
    //             childImageSharp {
    //                 fluid(maxWidth: 400, maxHeight: 500) {
    //                 ...GatsbyImageSharpFluid
    //                 }
    //             }
    //         }
    //     }
    // `)

    return (
        <AvatarWrap>
            <img src={AvatarImg} alt="avatar" height="400"/>
        </AvatarWrap>
    )
}

export default Avatar