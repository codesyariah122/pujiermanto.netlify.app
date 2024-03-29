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
                            empat
                            lima
                            enam
                            tujuh
                        }
                    }
                    educationFokus {
                        fokus {
                            satu
                            dua
                            tiga
                            empat
                            lima
                            enam
                            tujuh
                        }
                    }
                    educationDegre {
                        degre {
                            satu
                            dua
                            tiga
                            empat
                            lima
                            enam
                            tujuh
                        }
                    }
                    educationYear {
                        schoolYear {
                            satu
                            dua
                            tiga
                            empat
                            lima
                            enam
                            tujuh
                        }
                    }
                    educationCerts {
                        certs {
                            satu
                            dua
                            tiga
                            empat
                            lima
                            enam
                            tujuh
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
            "certs": data.site.siteMetadata.educationCerts.certs.satu
        },
        {
            "school": data.site.siteMetadata.educationSchool.school.dua,
            "fokus": data.site.siteMetadata.educationFokus.fokus.dua,
            "degre": data.site.siteMetadata.educationDegre.degre.dua,
            "year": data.site.siteMetadata.educationYear.schoolYear.dua,
            "certs": data.site.siteMetadata.educationCerts.certs.dua
        },
        {
            "school": data.site.siteMetadata.educationSchool.school.tiga,
            "fokus": data.site.siteMetadata.educationFokus.fokus.tiga,
            "degre": data.site.siteMetadata.educationDegre.degre.tiga,
            "year": data.site.siteMetadata.educationYear.schoolYear.tiga,
            "certs": data.site.siteMetadata.educationCerts.certs.tiga
        },
        {
            "school": data.site.siteMetadata.educationSchool.school.empat,
            "fokus": data.site.siteMetadata.educationFokus.fokus.empat,
            "degre": data.site.siteMetadata.educationDegre.degre.empat,
            "year": data.site.siteMetadata.educationYear.schoolYear.empat,
            "certs": data.site.siteMetadata.educationCerts.certs.empat
        },
        {
            "school": data.site.siteMetadata.educationSchool.school.lima,
            "fokus": data.site.siteMetadata.educationFokus.fokus.lima,
            "degre": data.site.siteMetadata.educationDegre.degre.lima,
            "year": data.site.siteMetadata.educationYear.schoolYear.lima,
            "certs": data.site.siteMetadata.educationCerts.certs.lima
        },
        {
            "school": data.site.siteMetadata.educationSchool.school.enam,
            "fokus": data.site.siteMetadata.educationFokus.fokus.enam,
            "degre": data.site.siteMetadata.educationDegre.degre.enam,
            "year": data.site.siteMetadata.educationYear.schoolYear.enam,
            "certs": data.site.siteMetadata.educationCerts.certs.enam
        },
        {
            "school": data.site.siteMetadata.educationSchool.school.tujuh,
            "fokus": data.site.siteMetadata.educationFokus.fokus.tujuh,
            "degre": data.site.siteMetadata.educationDegre.degre.tujuh,
            "year": data.site.siteMetadata.educationYear.schoolYear.tujuh,
            "certs": data.site.siteMetadata.educationCerts.certs.tujuh
        }

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
                    <h5 className="w3-opacity"><b>{edu.fokus} | <a href={edu.certs}><span style={{textDecoration: 'none', color: 'teal'}}>{edu.school}</span></a></b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>{edu.year}</h6>
                    <p>{edu.degre}</p>
                    <br/>
                    {
                        edu.school === "codesaya.com" ?  <a href={edu.certs} style={{textTransform:'lowercase'}}>Link Course</a> : <img src={edu.certs} width="200" style={{marginLeft: '-1rem'}} />
                    }
                    <br/>
                    <br/>
                    </div>
                </>
                ))
            }

        </div>
    )
}

export default Education
