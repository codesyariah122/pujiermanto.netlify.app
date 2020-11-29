import React from 'react'
import contentStyles from './content.scss'
import {Link, graphql, useStaticQuery} from 'gatsby'
import Education from './education'

const Experience = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    experienceCompany {
                        satu
                        dua
                        tiga
                    },
                    experienceDivision {
                        satu
                        dua
                        tiga
                    },
                    experienceYear {
                        satu
                        dua
                        tiga
                    },
                    experienceJobdesk {
                        satu
                        dua
                        tiga
                    }
                }
            }
        }
    `);

    return (
        <div class="w3-twothird">
        
        <div class="w3-container w3-card w3-white w3-margin-bottom">
          <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
          <div class="w3-container">
            <h5 class="w3-opacity"><b>{data.site.siteMetadata.experienceDivision.satu}{data.site.siteMetadata.experienceCompany.satu}</b></h5>
            <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>{data.site.siteMetadata.experienceYear.satu} <span class="w3-tag w3-teal w3-round">Current</span></h6>
            <p>{data.site.siteMetadata.experienceJobdesk.satu}</p>
            
          </div>
          <div class="w3-container">
            <h5 class="w3-opacity"><b>{data.site.siteMetadata.experienceDivision.dua}{data.site.siteMetadata.experienceCompany.dua}</b></h5>
            <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>{data.site.siteMetadata.experienceYear.dua}</h6>
            <p>{data.site.siteMetadata.experienceJobdesk.dua}</p>
            
          </div>
          <div class="w3-container">
            <h5 class="w3-opacity"><b>{data.site.siteMetadata.experienceDivision.tiga} {data.site.siteMetadata.experienceCompany.tiga}</b></h5>
            <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>{data.site.siteMetadata.experienceYear.tiga}</h6>
            <p>{data.site.siteMetadata.experienceJobdesk.tiga}</p>
          </div>
        </div>

        <Education/>
  
      </div>
    )
}
export default Experience