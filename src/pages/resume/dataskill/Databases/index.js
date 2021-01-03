import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

const Databases = () => {

	const data = useStaticQuery(graphql`
		query {
		  site {
		    siteMetadata {
		      skill {
		        sebelas
		      }
		      webdev {
		        sebelas {
		          mysql{
		            name
		            value
		            color
		          }
		          mongodb {
		            name
		            value
		            color
		          }
		          nosql {
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
		{"name":data.site.siteMetadata.webdev.sebelas.mysql.name, "percent": data.site.siteMetadata.webdev.sebelas.mysql.value, "color": data.site.siteMetadata.webdev.sebelas.mysql.color },

		{ "name": data.site.siteMetadata.webdev.sebelas.mongodb.name, "percent": data.site.siteMetadata.webdev.sebelas.mongodb.value, "color": data.site.siteMetadata.webdev.sebelas.mongodb.color },

		{ "name": data.site.siteMetadata.webdev.sebelas.nosql.name, "percent": data.site.siteMetadata.webdev.sebelas.nosql.value, "color": data.site.siteMetadata.webdev.sebelas.nosql.color },
	]

	
	return (
		<>
		<p><b><u>{data.site.siteMetadata.skill.sebelas}</u></b></p>
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

export { Databases }