import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

const Avatar = () => {
    const AvatarWrap = styled.div`
        margin: auto 0;
        flex: 0 1 36px;
        @media (max-width: 768px) and (orientation: landscape) {
            flex: 0 1 25px;
    }`

    const data = useStaticQuery(graphql`
        query {
            file: file(relativePath: { eq: "portfolio/avatar1.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 400, maxHeight: 500) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <AvatarWrap>
            <Img fluid={data.file.childImageSharp.fluid} alt="avatar"/>
        </AvatarWrap>
    )
}

export default Avatar