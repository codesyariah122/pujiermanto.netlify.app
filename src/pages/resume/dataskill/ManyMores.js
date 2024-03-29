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
		          aws {
		          	name
		          	value
		          	color
		          }
		          graphql {
		          	name
		          	value
		          	color
		          }
			  restapi {
			  	name
				value
				color
			  }
			  handlebars {
			  	name
				value
				color
			  }
			  blade {
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

		{ "name": data.site.siteMetadata.webdev.sepuluh.composer.name, "percent": data.site.siteMetadata.webdev.sepuluh.composer.value, "color": data.site.siteMetadata.webdev.sepuluh.composer.color },

		{ "name": data.site.siteMetadata.webdev.sepuluh.aws.name, "percent": data.site.siteMetadata.webdev.sepuluh.aws.value, "color": data.site.siteMetadata.webdev.sepuluh.aws.color },

		{ "name": data.site.siteMetadata.webdev.sepuluh.graphql.name, "percent": data.site.siteMetadata.webdev.sepuluh.graphql.value, "color": data.site.siteMetadata.webdev.sepuluh.graphql.color },

		{ "name": data.site.siteMetadata.webdev.sepuluh.restapi.name, "percent": data.site.siteMetadata.webdev.sepuluh.restapi.value, "color": data.site.siteMetadata.webdev.sepuluh.restapi.color },


		{ "name": data.site.siteMetadata.webdev.sepuluh.handlebars.name, "percent": data.site.siteMetadata.webdev.sepuluh.handlebars.value, "color": data.site.siteMetadata.webdev.sepuluh.handlebars.color },


		{ "name": data.site.siteMetadata.webdev.sepuluh.blade.name, "percent": data.site.siteMetadata.webdev.sepuluh.blade.value, "color": data.site.siteMetadata.webdev.sepuluh.blade.color },


	]


	return (
		<>
		<p><b><u>{data.site.siteMetadata.skill.sepuluh}</u></b></p>
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

export default ManyMores
