import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'
import BackEnd from './dataskill/BackEnd'
import CmsStatics from './dataskill/CmsStatics' 
import FrameWorkBackEnd from './dataskill/FrameWorkBackEnd'
import FrameWorkFrontEnd from './dataskill/FrameWorkFrontEnd'
import FrameWorkJavascript from './dataskill/FrameWorkJavascript'
import DesignTools from './dataskill/DesignTools'
import Databases from './dataskill/Databases'
import ItSupport from './dataskill/ItSupport'
import LibraryTools from './dataskill/LibraryTools'
import ManyMores from './dataskill/ManyMores'
import MarkUp from './dataskill/MarkUp' 

const Skills = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                  author {
                    email
                    phone
                    city
                    working {
                        satu
                        dua
                        tiga
                    }
                  }
                   
                }
            }
        }
    `);

    const devs = [
      {"text": data.site.siteMetadata.author.working.dua, "icon": "fa-briefcase"},
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

        <BackEnd/>

        <MarkUp/>

        <FrameWorkBackEnd/>

        <FrameWorkFrontEnd/>

        <FrameWorkJavascript/>

        <Databases/>

        <LibraryTools/>

        <CmsStatics/>

        <DesignTools/>

        <ManyMores/>

        <ItSupport/>

        <br/>
      </div>
    )
}

export default Skills