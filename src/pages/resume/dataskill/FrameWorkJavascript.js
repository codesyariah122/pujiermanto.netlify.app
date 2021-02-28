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
		            color
		          }
		          vue {
		            name
		            value
		            color
		          }
		          angular {
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
		{"name":data.site.siteMetadata.webdev.lima.react.name, "percent": data.site.siteMetadata.webdev.lima.react.value, "color": data.site.siteMetadata.webdev.lima.react.color },

		{ "name": data.site.siteMetadata.webdev.lima.vue.name, "percent": data.site.siteMetadata.webdev.lima.vue.value, "color": data.site.siteMetadata.webdev.lima.vue.color },

		{ "name": data.site.siteMetadata.webdev.lima.angular.name, "percent": data.site.siteMetadata.webdev.lima.angular.value, "color": data.site.siteMetadata.webdev.lima.angular.color }
	]

	
	return (
		<>
		<p><b><u>{data.site.siteMetadata.skill.lima}</u></b></p>
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

export default FrameWorkJavascript