import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const date = new Date();
const year = date.getFullYear();

const Author = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <h1>{data.site.siteMetadata.author} &copy; {year}</h1>
    )
}

export default Author