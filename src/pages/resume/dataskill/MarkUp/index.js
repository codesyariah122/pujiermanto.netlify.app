import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

const MarkUp = () => {

	const data = useStaticQuery(graphql`
		query {
		  site {
		    siteMetadata {
		      skill {
		        dua
		      }
		      webdev {
		        dua {
		          markup {
		            name
		            value
		            color
		          }
		          preprocessor {
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
		{ "name":data.site.siteMetadata.webdev.dua.markup.name, "percent": data.site.siteMetadata.webdev.dua.markup.value, "color": data.site.siteMetadata.webdev.dua.markup.color },
		
		{ "name":data.site.siteMetadata.webdev.dua.preprocessor.name, "percent": data.site.siteMetadata.webdev.dua.preprocessor.value, "color": data.site.siteMetadata.webdev.dua.preprocessor.color}
	]

	
	return (
		<>
		<p><b><u>{data.site.siteMetadata.skill.dua}</u></b></p>
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

export {MarkUp}