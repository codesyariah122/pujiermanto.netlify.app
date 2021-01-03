import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

const FrameWorkFrontEnd = () => {

	const data = useStaticQuery(graphql`
		query {
		  site {
		    siteMetadata {
		      skill {
		        empat
		      }
		      webdev {
		        empat {
		          bootstrap{
		            name
		            value
		            color
		          }
		          materialize {
		            name
		            value
		            color
		          }
		          bulma {
		            name
		            value
		            color
		          }
		          foundation {
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
		{"name":data.site.siteMetadata.webdev.empat.bootstrap.name, "percent": data.site.siteMetadata.webdev.empat.bootstrap.value, "color": data.site.siteMetadata.webdev.empat.bootstrap.color },

		{ "name": data.site.siteMetadata.webdev.empat.materialize.name, "percent": data.site.siteMetadata.webdev.empat.materialize.value, "color": data.site.siteMetadata.webdev.empat.materialize.color },

		{ "name": data.site.siteMetadata.webdev.empat.bulma.name, "percent": data.site.siteMetadata.webdev.empat.bulma.value, "color": data.site.siteMetadata.webdev.empat.bulma.color },
		
		{"name":data.site.siteMetadata.webdev.empat.foundation.name, "percent": data.site.siteMetadata.webdev.empat.foundation.value, "color": data.site.siteMetadata.webdev.empat.foundation.color }
	]

	
	return (
		<>
		<p><b><u>{data.site.siteMetadata.skill.empat}</u></b></p>
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

export {FrameWorkFrontEnd}