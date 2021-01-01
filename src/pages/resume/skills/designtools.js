import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

const DesignTools = () => {

	const data = useStaticQuery(graphql`
		query {
		  site {
		    siteMetadata {
		      skill {
		        enam
		      }
		      webdev {
		        enam {
		          photoshop {
		            name
		            value
		            color
		          }
		          corel {
		            name
		            value
		            color
		          }
		          figma {
		            name
		            value
		            color
		          }
		          adobexd {
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
		{"name":data.site.siteMetadata.webdev.enam.photoshop.name, "percent": data.site.siteMetadata.webdev.enam.photoshop.value, "color": data.site.siteMetadata.webdev.enam.photoshop.color },

		{ "name": data.site.siteMetadata.webdev.enam.corel.name, "percent": data.site.siteMetadata.webdev.enam.corel.value, "color": data.site.siteMetadata.webdev.enam.corel.color },

		{ "name": data.site.siteMetadata.webdev.enam.figma.name, "percent": data.site.siteMetadata.webdev.enam.figma.value, "color": data.site.siteMetadata.webdev.enam.figma.color },

		{ "name": data.site.siteMetadata.webdev.enam.adobexd.name, "percent": data.site.siteMetadata.webdev.enam.adobexd.value, "color": data.site.siteMetadata.webdev.enam.adobexd.color }
	]

	
	return (
		<>
		<p><b><u>{data.site.siteMetadata.skill.enam}</u></b></p>
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

export default DesignTools