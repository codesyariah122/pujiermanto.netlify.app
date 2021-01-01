import React from 'react'
import{graphql, useStaticQuery} from 'gatsby'

const Repository = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    educationSchool {
                        satu
                        dua
                        tiga
                    }
                    educationFokus {
                        satu
                        dua
                        tiga
                    }
                    educationDegre {
                        satu
                        dua
                        tiga
                    }
                    educationYear {
                        satu
                        dua
                        tiga
                    }
                }
            }
        }
    `);

    const Edus = [
        {
            "school": data.site.siteMetadata.educationSchool.satu,
            "fokus": data.site.siteMetadata.educationFokus.satu,
            "degre": data.site.siteMetadata.educationDegre.satu,
            "year": data.site.siteMetadata.educationYear.satu,
        },
        {
            "school": data.site.siteMetadata.educationSchool.dua,
            "fokus": data.site.siteMetadata.educationFokus.dua,
            "degre": data.site.siteMetadata.educationDegre.dua,
            "year": data.site.siteMetadata.educationYear.dua,
        },
        {
            "school": data.site.siteMetadata.educationSchool.tiga,
            "fokus": data.site.siteMetadata.educationFokus.tiga,
            "degre": data.site.siteMetadata.educationDegre.tiga,
            "year": data.site.siteMetadata.educationYear.tiga,
        },

    ]

    return (
        <div class="w3-container w3-card w3-white">

            <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-github-alt fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>My Github Project</h2>
            
            <div class="w3-container">
                <h5 class="w3-opacity"><b>Web Development Study | <span style={{textDecoration: 'none', color: 'teal'}}>W3Schools.com</span></b></h5>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Forever</h6>
                <p>Web Development! All I need to know in one place</p>
            </div>
            {
                Edus.map(edu => (
                <>
                    <div class="w3-container">
                    <h5 class="w3-opacity"><b>{edu.fokus} | <span style={{textDecoration: 'none', color: 'teal'}}>{edu.school}</span></b></h5>
                    <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>{edu.year}</h6>
                    <p>{edu.degre}</p>
                    </div>
                </>
                ))
            }
            
        </div>
    )
}

export default Repository