import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

const CmsStatics = () => {

	const data = useStaticQuery(graphql`
		query {
		  site {
		    siteMetadata {
		      skill {
		        sembilan
		      }
					webdev {
            sembilan {
              wordpress{
                name
                value
                color
              }
              drupal {
                name
                value
                color
              }
              presta {
                name
                value
                color
              }
              woo {
                name
                value
                color
              }
              gatsby {
                name
                value
                color
              }
              next {
                name
                value
                color
              }
              jekyll {
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
		{"name":data.site.siteMetadata.webdev.sembilan.wordpress.name, "percent": data.site.siteMetadata.webdev.sembilan.wordpress.value, "color": data.site.siteMetadata.webdev.sembilan.wordpress.color },

		{ "name": data.site.siteMetadata.webdev.sembilan.drupal.name, "percent": data.site.siteMetadata.webdev.sembilan.drupal.value, "color": data.site.siteMetadata.webdev.sembilan.drupal.color },

		{ "name": data.site.siteMetadata.webdev.sembilan.presta.name, "percent": data.site.siteMetadata.webdev.sembilan.presta.value, "color": data.site.siteMetadata.webdev.sembilan.presta.color },

		{ "name": data.site.siteMetadata.webdev.sembilan.woo.name, "percent": data.site.siteMetadata.webdev.sembilan.woo.value, "color": data.site.siteMetadata.webdev.sembilan.woo.color  }, 

		{ "name": data.site.siteMetadata.webdev.sembilan.gatsby.name, "percent": data.site.siteMetadata.webdev.sembilan.gatsby.value, "color": data.site.siteMetadata.webdev.sembilan.gatsby.color },

		{ "name": data.site.siteMetadata.webdev.sembilan.next.name, "percent": data.site.siteMetadata.webdev.sembilan.next.value, "color": data.site.siteMetadata.webdev.sembilan.next.color }
	]

	
	return (
		<>
		<p><b><u>{data.site.siteMetadata.skill.sembilan}</u></b></p>
		{
			fetchings.map(fetch => (
				<>
					<ul style={{listStyle: 'none'}}>
						<li>
							<b>{fetch.name}</b>
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

export default CmsStatics