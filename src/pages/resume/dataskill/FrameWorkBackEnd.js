import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

const FrameWorkBackEnd = () => {

	const data = useStaticQuery(graphql`
		query {
		  site {
		    siteMetadata {
		      skill {
		        tiga
		      }
		      webdev {
		        tiga {
		          laravel{
		            name
		            value
		            color
		          }
		          codeigniter {
		            name
		            value
		            color
		          }
		          express {
		            name
		            value
		            color
		          }
		          django {
		            name
		            value
		            color
		          }
		          rails {
		          	name
		          	value
		          	color
		          }
		        }
		      }
		    }
		  }
		}
	`)

	const fetchings = [
		{"name":data.site.siteMetadata.webdev.tiga.laravel.name, "percent": data.site.siteMetadata.webdev.tiga.laravel.value, "color": data.site.siteMetadata.webdev.tiga.laravel.color },

		{ "name": data.site.siteMetadata.webdev.tiga.codeigniter.name, "percent": data.site.siteMetadata.webdev.tiga.codeigniter.value, "color": data.site.siteMetadata.webdev.tiga.codeigniter.color },

		{ "name": data.site.siteMetadata.webdev.tiga.express.name, "percent": data.site.siteMetadata.webdev.tiga.express.value, "color": data.site.siteMetadata.webdev.tiga.express.color },
		
		{ "name":data.site.siteMetadata.webdev.tiga.django.name, "percent": data.site.siteMetadata.webdev.tiga.django.value, "color": data.site.siteMetadata.webdev.tiga.django.color },

		{ "name":data.site.siteMetadata.webdev.tiga.rails.name, "percent": data.site.siteMetadata.webdev.tiga.rails.value, "color": data.site.siteMetadata.webdev.tiga.rails.color }
	]

	
	return (
		<>
		<p><b><u>{data.site.siteMetadata.skill.tiga}</u></b></p>
		{
			fetchings.map(fetch => (
				<>
					<ul style={{listStyle: 'none'}}>
						<li>
							{fetch.name}
							<div className="w3-light-grey w3-round-xlarge w3-small">
							   	<div className={`w3-container w3-center w3-round-xlarge w3-${fetch.color}`} style={{width: `${fetch.percent}%`}}>
							         {fetch.percent}%
							    </div>
							</div>
						</li>
					</ul>
				</>
			))
		}
		</>
	)
}

export default FrameWorkBackEnd