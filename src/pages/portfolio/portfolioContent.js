import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Experience from './experience'
import Skills from './skills'
import styled from "styled-components"


const Content = styled.div`
  max-width:1400px;
`
const Avatar = styled.img`
width:100%;
`

const PortfolioContent = () => {
    const data = useStaticQuery(graphql`
        query {
            site{
                siteMetadata {
                    img
                    author
                    email
                    phone
                    city
                }
            }
        }
    `);
    return (
      <Content>
          <div class="w3-content w3-margin-top">
        
            <div class="w3-row-padding">
            
              <div class="w3-third">
              
                <div class="w3-white w3-text-grey w3-card-4">
                  <div class="w3-display-container">
                    
                    <Avatar src={data.site.siteMetadata.img} alt="Avatar" width="305" height="370"  />

                    <div class="w3-display-bottomleft w3-container w3-text-black">
                      <h2>{data.site.siteMetadata.author}</h2>
                    </div>
                  </div>
                  
                  <Skills/>

                </div>
                <br/>        
              </div>

              <Experience/>

            </div>
            
          </div>

      </Content>
    )
}

export default PortfolioContent