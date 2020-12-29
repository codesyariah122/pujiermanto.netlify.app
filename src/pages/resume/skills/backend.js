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
		          }
		          node {
		            name
		            value
		          }
		          python {
		            name
		            value
		          }
		          ruby {
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
		{"name":data.site.siteMetadata.webdev.satu.php.name, "percent": data.site.siteMetadata.webdev.satu.php.value},

		{ "name": data.site.siteMetadata.webdev.satu.node.name, "percent": data.site.siteMetadata.webdev.satu.node.value },

		{ "name": data.site.siteMetadata.webdev.satu.python.name, "percent": data.site.siteMetadata.webdev.satu.python.value },
		
		{"name":data.site.siteMetadata.webdev.satu.ruby.name, "percent": data.site.siteMetadata.webdev.satu.ruby.value}
	]

	
	return (
		<>
		<p><b><u>{data.site.siteMetadata.skill.satu}</u></b></p>
		{
			fetchings.map(fetch => (
				<>
					<ul style={{listStyle: 'none'}}>
						<li>
							<b>{fetch.name}</b>
							<div class="w3-light-grey w3-round-xlarge w3-small">
							   	<div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:`${fetch.percent}`}}>
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

export default BackEnd