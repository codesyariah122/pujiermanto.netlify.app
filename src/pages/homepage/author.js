import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const date = new Date();
const year = date.getFullYear();



const Author = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author {
                        full 
                        calls
                    }
                }
            }
        }
    `)

    const Effect = styled.div`
        h1 {
            letter-spacing: 15px;
            position: relative;
            font-size:18px;
            &:before {
                content: "${data.site.siteMetadata.author.full}";
                position: absolute;
                margin: auto;
                left: 0;
                right: 0;
                max-width: 400px;
                color: transparent;
                letter-spacing: 10px;
                text-shadow: none;
            }
        }
`

    return (
        <Effect>
            <h1>{data.site.siteMetadata.author.full} &copy; {year}</h1>
        </Effect>
    )
}

export default Author