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
                        blog,
                        workdocumentation {
                            link_project1 {
                                name,
                                satu,
                                dua,
                                tiga,
                                empat
                            },
                            link_project2 {
                                name,
                                satu,
                                dua
                            },
                            link_project3 {
                                name,
                                satu,
                                dua
                            }
                        }
                    },
                    experienceCompany {
                        company {
                            myblog
                            satu
                            dua
                            tiga
                            empat
                        }

                    },
                    experienceDivision {
                        division {
                            myblog
                            satu
                            dua
                            tiga
                            empat
                        }

                    },
                    experienceYear {
                        workYear {
                            myblog
                            satu
                            dua
                            tiga
                            empat
                        }
                    },
                    experienceJobdesk {
                        jobdesk {
                            myblog
                            satu
                            dua
                            tiga
                            empat
                        }
                    }
                }
            }
        }
    `);

    const urlSite = {
      'blog': `https://${data.site.siteMetadata.author.blog}`
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
            "url": "https://evoush.com",
            "jobdesk": data.site.siteMetadata.experienceJobdesk.jobdesk.satu

        },

        {
            "div": data.site.siteMetadata.experienceDivision.division.dua,
            "com": data.site.siteMetadata.experienceCompany.company.dua,
            "year": data.site.siteMetadata.experienceYear.workYear.dua,
            "jobdesk": data.site.siteMetadata.experienceJobdesk.jobdesk.dua,
            "url": "https://syoobe.co.id"
        },

        {
            "div": data.site.siteMetadata.experienceDivision.division.tiga,
            "com": data.site.siteMetadata.experienceCompany.company.tiga,
            "year": data.site.siteMetadata.experienceYear.workYear.tiga,
            "jobdesk": data.site.siteMetadata.experienceJobdesk.jobdesk.tiga,
            "url": "https://ourcitrus.com"
        },
        {
            "div": data.site.siteMetadata.experienceDivision.division.empat,
            "com": data.site.siteMetadata.experienceCompany.company.empat,
            "year": data.site.siteMetadata.experienceYear.workYear.empat,
            "jobdesk": data.site.siteMetadata.experienceJobdesk.jobdesk.empat,
            "url": ""
        },
    ]

    const evoushDocs = [
        {
            result: data.site.siteMetadata.author.workdocumentation.link_project1,
            screens: {
                satu: 'https://evoush-landing-api.herokuapp.com/videos/mobile.mp4',
                dua: 'https://evoush-landing-api.herokuapp.com/videos/login_web_replika.mp4'
            }
        }
    ]

    const syoobeDocs = [
        {
            result: data.site.siteMetadata.author.workdocumentation.link_project2,
            screens: {
                satu: 'https://raw.githubusercontent.com/codesyariah122/codesyariah122/main/portfolio/frontend/syoobe.jpg',
                dua: 'https://raw.githubusercontent.com/codesyariah122/codesyariah122/main/portfolio/frontend/syoobe_marketplace.jpg'
            }
        }
    ]

    const ourcitrusDocs = [
        {
            result: data.site.siteMetadata.author.workdocumentation.link_project3,
            screens: {
                satu: 'https://raw.githubusercontent.com/codesyariah122/codesyariah122/main/portfolio/frontend/oc_fr1.jpg',
                dua: 'https://raw.githubusercontent.com/codesyariah122/codesyariah122/main/portfolio/backend/oc_be1.jpg'
            }
        }
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
            <b>{exp.div} <Link to={exp.url} style={{textDecoration: 'none', color: 'teal'}}>
                {exp.com}
                </Link>

            </b></h5>

            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>{exp.year} &nbsp; <span className={`w3-tag ${exp.teal} w3-round`}>{exp.tealLabel}</span>

            </h6>
            <p>{exp.jobdesk}</p>
          </div>
    ))
}
    <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Link Project</h2>
{
    evoushDocs.map(data => (

        <div className="w3-container">
            <h5 className="w3-opacity">{data.result.name}</h5>
            <ul>
                <li>
                    <h6>Evoush Frontend Webapplication</h6><br/>
                    <Link className="btn btn-primary text-center" href={data.result.satu} style={{textDecoration: 'none', color: 'teal', marginBottom: '2rem'}}>Link Project</Link> <br/><br/>

                    <video style={{marginLeft: '-3rem'}} autoplay="" loop="" playsinline="" muted="" src={data.screens.satu} class="SectionCareerPathComponentssc__RocketAnimation-sc-1od742d-3 kUmObu" width="350" height="450">
                    </video><br/>
                    <video style={{marginLeft: '-3rem'}} autoplay="" loop="" playsinline="" muted="" src={data.screens.dua} class="SectionCareerPathComponentssc__RocketAnimation-sc-1od742d-3 kUmObu" width="350" height="450">
                    </video> <br/>
                </li>
                <li>
                    <h6>Evoush Backend Restfullapi application</h6><br/>
                    <Link href={data.result.dua} style={{textDecoration: 'none', color: 'teal', marginBottom: '2rem'}}>Link Project</Link><br/><br/>
                </li>
                <li>
                    <h6>Evoush Backend Migrating Api</h6><br/>
                    <Link href={data.result.tiga} style={{textDecoration: 'none', color: 'teal', marginBottom: '2rem'}}>Link Project</Link><br/><br/>
                </li>
                <li>
                    <h6>Evoush Third Party Api Access</h6><br/>
                    <Link href={data.result.empat} style={{textDecoration: 'none', color: 'teal', marginBottom: '2rem'}}>Link Project</Link><br/><br/>
                </li>
            </ul>
        </div>
    ))
}

{
    syoobeDocs.map(data => (

        <div className="w3-container">
            <h5 className="w3-opacity">{data.result.name}</h5>
            <ul>
                <li>
                    <h6>Syoobe Wordpress Blog</h6><br/>
                    <Link href="data.result.satu" style={{textDecoration: 'none', color: 'teal'}}>Link Project</Link><br/> <br/>
                    <img src={data.screens.satu} width="200" height="100"/> <br/>
                </li>
                <li>
                    <h6>Syoobe Webapplication marketplace</h6><br/>
                    <Link href={data.result.dua} style={{textDecoration: 'none', color: 'teal'}}>Link Project</Link><br/> <br/>
                    <img src={data.screens.dua} width="200" height="100"/> <br/>
                </li>
            </ul>
        </div>
    ))
}

{
    ourcitrusDocs.map(data => (

        <div className="w3-container">
            <h5 className="w3-opacity">{data.result.name}</h5>
            <ul>
                <li>
                    <h6>Ourcitrus Webapplication and Company profile</h6><br/>
                    <Link href={data.result.satu} style={{textDecoration: 'none', color: 'teal'}}>Link Project</Link><br/> <br/>
                    <img src={data.screens.satu} width="200" height="100"/> <br/>
                </li>
                <li>
                    <h6>Ourcitrus Backend and System</h6><br/>
                    <Link href={data.result.dua} style={{textDecoration: 'none', color: 'teal'}}>Link Project</Link><br/> <br/>
                    <img src={data.screens.dua} width="200" height="100"/> <br/>
                </li>
            </ul>
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
