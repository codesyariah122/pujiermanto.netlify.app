import React from 'react'
import {graphql, useStaticQuery } from 'gatsby'
import Artwork from './artwork'

const Hero = () => {

const data = useStaticQuery(graphql`
        query{
          site{
            siteMetadata{
              author{
                about{
                  welcome
                  print
                }
              }
            }
          }
        }
    `)

    return (
        <>
            <div class="text-wrapper">
                  <h1 className="title">{data.site.siteMetadata.author.about.welcome}, </h1>
                  <p className="description"> 
                    <span>{data.site.siteMetadata.author.about.print}</span>
                  </p>
            </div>

            <div className="image-wrapper">
                <Artwork/>
            </div>
        </>
    )
}

export default Hero