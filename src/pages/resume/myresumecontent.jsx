import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Experience from './contents/experience'
import Skills from './contents/skills'
import Avatar from './contents/avatar'
import styled from 'styled-components'

const Content = styled.div`
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
`
// const AvatarImg = styled.img`
// width:100%;
// `

const MyResumeContent = () => {
    const data = useStaticQuery(graphql`
        query {
            site{
                siteMetadata {
                    img
                    author {
                      full
                    }
                }
            }
        }
    `);
    return (
      <Content css={{marginTop: '1.7rem'}}>
          <div className="w3-content w3-margin-top">
        
            <div className="w3-row-padding">
            
              <div className="w3-third">
              
                <div className="w3-white w3-text-grey w3-card-4">
                  <div className="w3-display-container">
                    
                    {/* <Avatar src={data.site.siteMetadata.img} alt="Avatar" width="305" height="370"  /> */}

                    <Avatar/>

                    <div className="w3-display-bottomleft w3-container w3-text-black">
                      <h2>{data.site.siteMetadata.author.full}</h2>
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

export default MyResumeContent