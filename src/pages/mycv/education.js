import React from 'react'
import{graphql, useStaticQuery} from 'gatsby'

const Education = () => {
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
    return (
        <div class="w3-container w3-card w3-white">
            <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
            <div class="w3-container">
            <h5 class="w3-opacity"><b>W3Schools.com</b></h5>
            <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Forever</h6>
            <p>Web Development! All I need to know in one place</p>
            
            </div>
            <div class="w3-container">
            <h5 class="w3-opacity"><b>{data.site.siteMetadata.educationFokus.satu} | {data.site.siteMetadata.educationSchool.satu}</b></h5>
            <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>{data.site.siteMetadata.educationYear.satu}</h6>
            <p>{data.site.siteMetadata.educationDegre.satu}</p>
            
            </div>
            <div class="w3-container">
            <h5 class="w3-opacity"><b>{data.site.siteMetadata.educationFokus.dua} | {data.site.siteMetadata.educationSchool.dua}</b></h5>
            <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>{data.site.siteMetadata.educationYear.dua}</h6>
            <p>{data.site.siteMetadata.educationDegre.dua}</p>
            
            </div>
            <div class="w3-container">
            <h5 class="w3-opacity"><b>{data.site.siteMetadata.educationFokus.tiga} | {data.site.siteMetadata.educationSchool.tiga}</b></h5>
            <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>{data.site.siteMetadata.educationYear.tiga}</h6>
            <p>{data.site.siteMetadata.educationDegre.tiga}</p>
            <br/><br/>
            </div>
        </div>
    )
}

export default Education