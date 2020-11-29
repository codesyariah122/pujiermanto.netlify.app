import React from 'react'
import contentStyles from './content.scss'
import {Link, graphql, useStaticQuery} from 'gatsby'

const Skills = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    email
                    phone
                    city
                    working {
                        satu
                        dua
                        tiga
                    }
                    skill {
                        satu
                        dua
                        tiga
                        empat
                        lima
                        enam
                    }
                }
            }
        }
    `);

    return (
        <div class="w3-container">
        <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>{data.site.siteMetadata.working.dua}</p>
        <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>{data.site.siteMetadata.city}</p>
        <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>{data.site.siteMetadata.email}</p>
        <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>{data.site.siteMetadata.phone}</p>
        

        <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
        <p><b>{data.site.siteMetadata.skill.satu}</b></p>
        <p>(PHP, NodeJS, Python, Ruby)</p>
        <div class="w3-light-grey w3-round-xlarge w3-small">
          <div class="w3-container w3-center w3-round-xlarge w3-teal" className={contentStyles.backend}>90%</div>
        </div>
        <p><b>{data.site.siteMetadata.skill.dua}</b></p>
        <p>(HTML, CSS, Javascript, Sass)</p>
        <div class="w3-light-grey w3-round-xlarge w3-small">
          <div class="w3-container w3-center w3-round-xlarge w3-teal" className={contentStyles.frontend}>
            <div class="w3-center w3-text-white">100%</div>
          </div>
        </div>
        <p><b>{data.site.siteMetadata.skill.tiga}</b></p>
        <p>(Codeigniter, Laravel, Express, Django)</p>
        <div class="w3-light-grey w3-round-xlarge w3-small">
          <div class="w3-container w3-center w3-round-xlarge w3-teal" className={contentStyles.framework}>90%</div>
        </div>
        <p><b>{data.site.siteMetadata.skill.empat}</b></p>
        <p>(CorelDraw, Photoshop, Ilustrator, Figma)</p>
        <div class="w3-light-grey w3-round-xlarge w3-small">
          <div class="w3-container w3-center w3-round-xlarge w3-teal" className={contentStyles.design}>95%</div>
        </div>
        <p><b>{data.site.siteMetadata.skill.lima}</b></p>
        <p>(Linux OS, Windows OS, Windows Application, Router, Mikrotik, etc ... )</p>
        <div class="w3-light-grey w3-round-xlarge w3-small">
          <div class="w3-container w3-center w3-round-xlarge w3-teal" className={contentStyles.itSupport}>100%</div>
        </div>
        <br/>
      </div>
    )
}

export default Skills