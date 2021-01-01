import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import Education from './education'
import Repository from './repository'


const Experience = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author {
                        blog

                    },
                    experienceCompany {
                        myblog
                        satu
                        dua
                        tiga
                    },
                    experienceDivision {
                        myblog
                        satu
                        dua
                        tiga
                    },
                    experienceYear {
                        myblog
                        satu
                        dua
                        tiga
                    },
                    experienceJobdesk {
                        myblog
                        satu
                        dua
                        tiga
                    }
                }
            }
        }
    `);

    const urlSite = {
      'blog': `https://${data.site.siteMetadata.blog}`
    }

    const Experiences = [
        {
            "div": data.site.siteMetadata.experienceDivision.myblog, 
            "teal": "w3-teal",
            "tealLabel": "And Until Now",
            "url": urlSite.blog,
            "com": data.site.siteMetadata.experienceCompany.myblog,
            "year": data.site.siteMetadata.experienceYear.myblog,
            "jobdesk": data.site.siteMetadata.experienceJobdesk.myblog
        },

        {
            "div": data.site.siteMetadata.experienceDivision.satu, 
            "com": data.site.siteMetadata.experienceCompany.satu,
            "year": data.site.siteMetadata.experienceYear.satu,
            "jobdesk": data.site.siteMetadata.experienceJobdesk.satu
        },

        {
            "div": data.site.siteMetadata.experienceDivision.dua, 
            "com": data.site.siteMetadata.experienceCompany.dua,
            "year": data.site.siteMetadata.experienceYear.dua,
            "jobdesk": data.site.siteMetadata.experienceJobdesk.dua
        },

        {
            "div": data.site.siteMetadata.experienceDivision.tiga, 
            "com": data.site.siteMetadata.experienceCompany.tiga,
            "year": data.site.siteMetadata.experienceYear.tiga,
            "jobdesk": data.site.siteMetadata.experienceJobdesk.tiga
        },
    ]

    // console.log(Experiences)

    return (
        <div class="w3-twothird">
        
        <div class="w3-container w3-card w3-white w3-margin-bottom">
          <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
{
    Experiences.map(exp => (
        <>
         <div class="w3-container">
            <h5 class="w3-opacity">
            <b>{exp.div} <Link to={exp.url} style={{textDecoration: 'none', color: 'teal'}}> {exp.com}
                </Link>
                
            </b></h5>
            
            <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>{exp.year} &nbsp; <span class={`w3-tag ${exp.teal} w3-round`}>{exp.tealLabel}</span>
    
            </h6>
            <p>{exp.jobdesk}</p>
          </div>
        </>
    ))
}
         

        </div>

        <Education/>

        <Repository/>
        
      </div>
    )
}
export default Experience