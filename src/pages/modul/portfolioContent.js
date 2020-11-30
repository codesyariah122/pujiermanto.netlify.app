import React from 'react'
import contentStyles from './content.scss'
import {Link, graphql, useStaticQuery} from 'gatsby'
import Experience from './experience'
import Skills from './skills'


const PortfolioContent = () => {
    const data = useStaticQuery(graphql`
        query {
            site{
                siteMetadata {
                    author
                    email
                    phone
                    city
                }
            }
        }
    `);
    return (
        <div class="w3-content w3-margin-top" className={contentStyles.portfolioContent}>
        
          <div class="w3-row-padding">
          
            <div class="w3-third">
            
              <div class="w3-white w3-text-grey w3-card-4">
                <div class="w3-display-container">
                  <img src="https://raw.githubusercontent.com/codesyariah122/pujiermanto.netlify.app/with_new_gatsby/static/IMG_20200116_113112.jpg" width="305" height="370" className={contentStyles.avatarImg} alt="Avatar" />
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

    )
}

export default PortfolioContent