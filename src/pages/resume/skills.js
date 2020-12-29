import React from 'react'
import contentStyles from './content.scss'
import { graphql, useStaticQuery} from 'gatsby'
import BeckEnd from './skills/backend'
import MarkUp from './skills/markup'
import FrameWorkBackEnd from './skills/frameworkbackend'
import FrameWorkFrontEnd from './skills/frameworkfrontend'
import FrameWorkJavascript from './skills/frameworkjavascript'

const Skills = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                  author {
                    email
                    phone
                    city
                  }
                  working {
                    satu
                    dua
                    tiga
                  }
                   
                }
            }
        }
    `);

    const devs = [
      {"text": data.site.siteMetadata.working.dua, "icon": "fa-briefcase"},
      {"text": data.site.siteMetadata.author.city, "icon": "fa-home"},
      {"text": data.site.siteMetadata.author.email, "icon": "fa-envelope"},
      {"text": data.site.siteMetadata.author.phone, "icon": "fa-phone"}
    ]

    return (
        <div class="w3-container">
        {devs.map(dev => (
            <p><i class={`fa ${dev.icon} fa-fw w3-margin-right w3-large w3-text-teal`}></i>{dev.text}</p>
        ))}
        
        <br/>

        <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>

        <BeckEnd/>

        <MarkUp/>

        <FrameWorkBackEnd/>

        <FrameWorkFrontEnd/>

        <FrameWorkJavascript/>

        <br/>
      </div>
    )
}

export default Skills