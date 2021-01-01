import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

const BackEnd = () => {

	const data = useStaticQuery(graphql`
		query {
		  site {
		    siteMetadata {
		      skill {
		        satu
		      }
		      webdev {
		        satu {
		          php{
		            name
		            value
		            color
		          }
		          node {
		            name
		            value
		            color
		          }
		          python {
		            name
		            value
		            color
		          }
		          ruby {
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
		{ "name":data.site.siteMetadata.webdev.satu.php.name, "percent": data.site.siteMetadata.webdev.satu.php.value, "color": data.site.siteMetadata.webdev.satu.php.color },

		{ "name": data.site.siteMetadata.webdev.satu.node.name, "percent": data.site.siteMetadata.webdev.satu.node.value, "color": data.site.siteMetadata.webdev.satu.node.color },

		{ "name": data.site.siteMetadata.webdev.satu.python.name, "percent": data.site.siteMetadata.webdev.satu.python.value, "color": data.site.siteMetadata.webdev.satu.python.color },
		
		{"name":data.site.siteMetadata.webdev.satu.ruby.name, "percent": data.site.siteMetadata.webdev.satu.ruby.value, "color": data.site.siteMetadata.webdev.satu.ruby.color}
	]

	
	return (
		<>
		<p><b><u>{data.site.siteMetadata.skill.satu}</u></b></p>
		{
			fetchings.map(fetch => (
				<>
					<ul style={{listStyle: 'none'}}>
						<li>
							{fetch.name}
							<div class="w3-light-grey w3-round-xlarge w3-small">
							   	<div class={`w3-container w3-center w3-round-xlarge w3-${fetch.color}`} style={{width:`${fetch.percent}%`}}>
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

export default BackEnd