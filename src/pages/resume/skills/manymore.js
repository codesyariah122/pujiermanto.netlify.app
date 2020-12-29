import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

const ManyMores = () => {

	const data = useStaticQuery(graphql`
		query {
		  site {
		    siteMetadata {
		      skill {
		        sepuluh
		      }
		      webdev {
		        sepuluh {
		          git {
		            name
		            value
		            color
		          }
		          container {
		            name
		            value
		            color
		          }
		          composer {
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
		{"name":data.site.siteMetadata.webdev.sepuluh.git.name, "percent": data.site.siteMetadata.webdev.sepuluh.git.value, "color": data.site.siteMetadata.webdev.sepuluh.git.color },

		{ "name": data.site.siteMetadata.webdev.sepuluh.container.name, "percent": data.site.siteMetadata.webdev.sepuluh.container.value, "color": data.site.siteMetadata.webdev.sepuluh.container.color },

		{ "name": data.site.siteMetadata.webdev.sepuluh.composername, "percent": data.site.siteMetadata.webdev.sepuluh.composervalue, "color": data.site.siteMetadata.webdev.sepuluh.composercolor }
	]

	
	return (
		<>
		<p><b><u>{data.site.siteMetadata.skill.sepuluh}</u></b></p>
		{
			fetchings.map(fetch => (
				<>
					<ul style={{listStyle: 'none'}}>
						<li>
							<b>{fetch.name}</b>
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

export default ManyMores