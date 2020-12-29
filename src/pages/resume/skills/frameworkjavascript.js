import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

const FrameWorkJavascript = () => {

	const data = useStaticQuery(graphql`
		query {
		  site {
		    siteMetadata {
		      skill {
		        lima
		      }
		      webdev {
		        lima {
		          react{
		            name
		            value
		          }
		          vue {
		            name
		            value
		          }
		          angular {
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
		{"name":data.site.siteMetadata.webdev.lima.react.name, "percent": data.site.siteMetadata.webdev.lima.react.value},

		{ "name": data.site.siteMetadata.webdev.lima.vue.name, "percent": data.site.siteMetadata.webdev.lima.vue.value },

		{ "name": data.site.siteMetadata.webdev.lima.angular.name, "percent": data.site.siteMetadata.webdev.lima.angular.value }
	]

	
	return (
		<>
		<p><b><u>{data.site.siteMetadata.skill.lima}</u></b></p>
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

export default FrameWorkJavascript