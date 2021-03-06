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
                        company {
                            myblog
                            satu
                            dua
                            tiga                            
                        }

                    },
                    experienceDivision {
                        division {
                            myblog
                            satu
                            dua
                            tiga                            
                        }

                    },
                    experienceYear {
                        workYear {
                            myblog
                            satu
                            dua
                            tiga
                        }
                    },
                    experienceJobdesk {
                        jobdesk {
                            myblog
                            satu
                            dua
                            tiga
                        }
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
            "div": data.site.siteMetadata.experienceDivision.division.myblog, 
            "teal": "w3-teal",
            "tealLabel": "And Until Now",
            "url": urlSite.blog,
            "com": data.site.siteMetadata.experienceCompany.company.myblog,
            "year": data.site.siteMetadata.experienceYear.workYear.myblog,
            "jobdesk": data.site.siteMetadata.experienceJobdesk.jobdesk.myblog
        },

        {
            "div": data.site.siteMetadata.experienceDivision.division.satu, 
            "com": data.site.siteMetadata.experienceCompany.company.satu,
            "year": data.site.siteMetadata.experienceYear.workYear.satu,
            "jobdesk": data.site.siteMetadata.experienceJobdesk.jobdesk.satu
        },

        {
            "div": data.site.siteMetadata.experienceDivision.division.dua, 
            "com": data.site.siteMetadata.experienceCompany.company.dua,
            "year": data.site.siteMetadata.experienceYear.workYear.dua,
            "jobdesk": data.site.siteMetadata.experienceJobdesk.jobdesk.dua
        },

        {
            "div": data.site.siteMetadata.experienceDivision.division.tiga, 
            "com": data.site.siteMetadata.experienceCompany.company.tiga,
            "year": data.site.siteMetadata.experienceYear.workYear.tiga,
            "jobdesk": data.site.siteMetadata.experienceJobdesk.jobdesk.tiga
        },
    ]

    // console.log(Experiences)

    return (
        <div className="w3-twothird">
        
        <div className="w3-container w3-card w3-white w3-margin-bottom">
          <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
{
    Experiences.map(exp => (
         <div className="w3-container">
            <h5 className="w3-opacity">
            <b>{exp.div} <Link to={exp.url} style={{textDecoration: 'none', color: 'teal'}}> {exp.com}
                </Link>
                
            </b></h5>
            
            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>{exp.year} &nbsp; <span className={`w3-tag ${exp.teal} w3-round`}>{exp.tealLabel}</span>
    
            </h6>
            <p>{exp.jobdesk}</p>
          </div>
    ))
}
         

        </div>

        <Education/>

        <Repository/>
        
      </div>
    )
}

export default Experience