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
		          }
		          codeigniter {
		            name
		            value
		          }
		          express {
		            name
		            value
		          }
		          django {
		            name
		            value
		          }
		          rails {
		          	name
		          	value
		          }
		        }
		      }
		    }
		  }
		}
	`)

	const fetchings = [
		{"name":data.site.siteMetadata.webdev.tiga.laravel.name, "percent": data.site.siteMetadata.webdev.tiga.laravel.value},

		{ "name": data.site.siteMetadata.webdev.tiga.codeigniter.name, "percent": data.site.siteMetadata.webdev.tiga.codeigniter.value },

		{ "name": data.site.siteMetadata.webdev.tiga.express.name, "percent": data.site.siteMetadata.webdev.tiga.express.value },
		
		{"name":data.site.siteMetadata.webdev.tiga.django.name, "percent": data.site.siteMetadata.webdev.tiga.django.value},

		{"name":data.site.siteMetadata.webdev.tiga.rails.name, "percent": data.site.siteMetadata.webdev.tiga.rails.value}
	]

	
	return (
		<>
		<p><b><u>{data.site.siteMetadata.skill.tiga}</u></b></p>
		{
			fetchings.map(fetch => (
				<>
					<ul style={{listStyle: 'none'}}>
						<li>
							<b>{fetch.name}</b>
							<div class="w3-light-grey w3-round-xlarge w3-small">
							   	<div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width: `${fetch.percent}`}}>
							         {fetch.percent}
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