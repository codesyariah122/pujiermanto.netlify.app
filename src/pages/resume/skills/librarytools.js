import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

const LibraryTools = () => {

	const data = useStaticQuery(graphql`
		query {
		  site {
		    siteMetadata {
		      skill {
		        delapan
		      }
		      webdev {
		        delapan {
		          jquery {
		            name
		            value
		            color
		          }
		          chartjs {
		            name
		            value
		            color
		          }
		          aos {
		            name
		            value
		            color
		          }
		          tailwind {
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
		{"name":data.site.siteMetadata.webdev.delapan.jquery.name, "percent": data.site.siteMetadata.webdev.delapan.jquery.value, "color": data.site.siteMetadata.webdev.delapan.jquery.color },

		{ "name": data.site.siteMetadata.webdev.delapan.chartjs.name, "percent": data.site.siteMetadata.webdev.delapan.chartjs.value, "color": data.site.siteMetadata.webdev.delapan.chartjs.color },

		{ "name": data.site.siteMetadata.webdev.delapan.aos.name, "percent": data.site.siteMetadata.webdev.delapan.aos.value, "color": data.site.siteMetadata.webdev.delapan.aos.color },

		{ "name": data.site.siteMetadata.webdev.delapan.tailwind.name, "percent": data.site.siteMetadata.webdev.delapan.tailwind.value, "color": data.site.siteMetadata.webdev.delapan.tailwind.color  }
	]

	
	return (
		<>
		<p><b><u>{data.site.siteMetadata.skill.delapan}</u></b></p>
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

export default LibraryTools