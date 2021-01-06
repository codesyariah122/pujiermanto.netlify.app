import React from 'react'
import Artwork from './artwork'
import {graphql, useStaticQuery, Link} from 'gatsby'


const Hero = () => {

const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author {
                        full 
                        calls

                        hoby {
                        	satu
                        	dua
                        	tiga
                        }
                    }
                }
            }
        }
    `)
	
	const dev = {
		'full': data.site.siteMetadata.author.full,
		'calls': data.site.siteMetadata.author.calls
	}

	const hobys = [
		{'text': data.site.siteMetadata.author.hoby.satu, 'color': 'salmon'},
		{'text': data.site.siteMetadata.author.hoby.dua, 'color': 'brown'},
		{'text': data.site.siteMetadata.author.hoby.tiga, 'color': 'darksalmon'}
	]


	return (
		<>
			<div class="text-wrapper">
		          <h1 className="title">hellouw, </h1>
		          <p className="description">
		          	Saya <span style={{color: 'crimson'}}>{dev.calls}</span> Lengkapnya <span style={{color: 'coral'}}>{dev.full}</span>. Saat ini saya aktif sebagai {hobys.map(hoby => (
		          			<span>{hoby.text}</span>
		          		))}. Selengkapnya ...
		          </p>
		          <Link to="/resume" className="cta">Resume Saya</Link>
		        </div>

	        <div className="image-wrapper">
	           <Artwork/>
	        </div>
		</>
	)
}

export default Hero