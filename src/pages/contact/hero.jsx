import React from 'react'
// import {graphql, useStaticQuery } from 'gatsby'
import Artwork from './Artwork'

const Hero = () => {

    return (
        <>
            <div className="text-wrapper">
              <h1 className="title">Helo bradeurr </h1>
              <p style={{textIndent: '21px', fontSize: '18px', lineHeight: '37px', textAlign: 'justify', width:'100%'}} className="description"> 
              <span>
                Jika kalian membutuhkan jasa web development, mobile application ataupun IT consultant, jangan sungkan untuk contact kami melalui form contact di bawah ini.
              </span>
              <br/> 
              </p>
            </div>

            <div className="image-wrapper">
                <Artwork/>
            </div>
          </>
    )
}

export default Hero