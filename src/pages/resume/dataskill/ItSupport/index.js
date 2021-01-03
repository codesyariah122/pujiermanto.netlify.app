import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

const ItSupport = () => {

	const data = useStaticQuery(graphql`
		query {
		  site {
		    siteMetadata {
		      skill {
		        tujuh
		      }
		      webdev {
		        tujuh {
		          linux {
		            name
		            value
		            color
		          }
		          windows {
		            name
		            value
		            color
		          }
		          networking {
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
		{"name":data.site.siteMetadata.webdev.tujuh.linux.name, "percent": data.site.siteMetadata.webdev.tujuh.linux.value, "color": data.site.siteMetadata.webdev.tujuh.linux.color },

		{ "name": data.site.siteMetadata.webdev.tujuh.windows.name, "percent": data.site.siteMetadata.webdev.tujuh.windows.value, "color": data.site.siteMetadata.webdev.tujuh.windows.color },

		{ "name": data.site.siteMetadata.webdev.tujuh.networking.name, "percent": data.site.siteMetadata.webdev.tujuh.networking.value, "color": data.site.siteMetadata.webdev.tujuh.networking.color }
	]

	
	return (
		<>
		<p><b><u>{data.site.siteMetadata.skill.tujuh}</u></b></p>
		{
			fetchings.map(fetch => (
				<>
					<ul style={{listStyle: 'none'}}>
						<li>
							{fetch.name}
							<div class="w3-light-grey w3-round-xlarge w3-small">
							   	<div class={`w3-container w3-center w3-round-xlarge w3-${fetch.color}`} style={{width: `${fetch.percent}%`}}>
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

export {ItSupport}