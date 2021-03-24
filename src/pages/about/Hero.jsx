import React from 'react'
import {graphql, useStaticQuery } from 'gatsby'
import Artwork from './Artwork'

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
            <div className="text-wrapper">
                  <h1 className="title">{data.site.siteMetadata.author.about.welcome}, </h1>
                  <p style={{textIndent: '21px', fontSize: '18px', lineHeight: '37px', textAlign: 'justify', width:'100%'}} className="description"> 
                    <span>{data.site.siteMetadata.author.about.print}</span>
                     &nbsp; Dalam menambah khazanah intelektualitas bagi segenap khalayak umat. <br/> 
                    <span style={{color: 'DodgerBlue', marginTop:'1rem'}}>Selamat baca ...
                    </span>
                  </p>
            </div>

            <div className="image-wrapper">
                <Artwork/>
            </div>
        </>
    )
}

export default Hero