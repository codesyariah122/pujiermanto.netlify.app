import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

const BackEnd = () => {

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
		          }
		          preprocessor {
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
		{"name":data.site.siteMetadata.webdev.dua.markup.name, "percent": data.site.siteMetadata.webdev.dua.markup.value},
				{"name":data.site.siteMetadata.webdev.dua.preprocessor.name, "percent": data.site.siteMetadata.webdev.dua.preprocessor.value}
	]

	
	return (
		<>
		<p><b><u>{data.site.siteMetadata.skill.dua}</u></b></p>
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

export default BackEnd