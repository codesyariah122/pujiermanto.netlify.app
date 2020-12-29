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
		          }
		          materialize {
		            name
		            value
		          }
		          bulma {
		            name
		            value
		          }
		          foundation {
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
		{"name":data.site.siteMetadata.webdev.empat.bootstrap.name, "percent": data.site.siteMetadata.webdev.empat.bootstrap.value},

		{ "name": data.site.siteMetadata.webdev.empat.materialize.name, "percent": data.site.siteMetadata.webdev.empat.materialize.value },

		{ "name": data.site.siteMetadata.webdev.empat.bulma.name, "percent": data.site.siteMetadata.webdev.empat.bulma.value },
		
		{"name":data.site.siteMetadata.webdev.empat.foundation.name, "percent": data.site.siteMetadata.webdev.empat.foundation.value}
	]

	
	return (
		<>
		<p><b><u>{data.site.siteMetadata.skill.empat}</u></b></p>
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

export default FrameWorkFrontEnd