import React from 'react'
import{graphql, useStaticQuery} from 'gatsby'

const Education = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    educationSchool {
                        school {
                            satu
                            dua
                            tiga
                        }
                    }
                    educationFokus {
                        fokus {
                            satu
                            dua
                            tiga
                        }
                    }
                    educationDegre {
                        degre {
                            satu
                            dua
                            tiga
                        }
                    }
                    educationYear {
                        schoolYear {
                            satu
                            dua
                            tiga
                        }
                    }
                }
            }
        }
    `);

    const Edus = [
        {
            "school": data.site.siteMetadata.educationSchool.school.satu,
            "fokus": data.site.siteMetadata.educationFokus.fokus.satu,
            "degre": data.site.siteMetadata.educationDegre.degre.satu,
            "year": data.site.siteMetadata.educationYear.schoolYear.satu,
        },
        {
            "school": data.site.siteMetadata.educationSchool.school.dua,
            "fokus": data.site.siteMetadata.educationFokus.fokus.dua,
            "degre": data.site.siteMetadata.educationDegre.degre.dua,
            "year": data.site.siteMetadata.educationYear.schoolYear.dua,
        },
        {
            "school": data.site.siteMetadata.educationSchool.school.tiga,
            "fokus": data.site.siteMetadata.educationFokus.fokus.tiga,
            "degre": data.site.siteMetadata.educationDegre.degre.tiga,
            "year": data.site.siteMetadata.educationYear.schoolYear.tiga,
        },

    ]

    return (
        <div className="w3-container w3-card w3-white w3-margin-bottom">

            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
            
            <div className="w3-container">
                <h5 className="w3-opacity"><b>Web Development Study | <span style={{textDecoration: 'none', color: 'teal'}}>W3Schools.com</span></b></h5>
                <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Forever</h6>
                <p>Web Development! All I need to know in one place</p>
            </div>
            {
                Edus.map(edu => (
                <>
                    <div className="w3-container">
                    <h5 className="w3-opacity"><b>{edu.fokus} | <span style={{textDecoration: 'none', color: 'teal'}}>{edu.school}</span></b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>{edu.year}</h6>
                    <p>{edu.degre}</p>
                    </div>
                </>
                ))
            }
            
        </div>
    )
}

export default Education