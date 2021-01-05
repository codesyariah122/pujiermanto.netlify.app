import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const ProfileGithub = () => {

	const data = useStaticQuery(graphql`
		query {
			github{
		    viewer {
		    	url
		      	login
		      	avatarUrl
		      	name
		      	company
		      	bio
		      	followers{
		        	totalCount
		      	}
		      	following{
		      		totalCount
		      	}
		    }
		  }
		}
	`)

	// console.log(data)

	return (
		<>
			<div class="w3-container">
				<ul style={{listStyle:'none'}}>
					<li style={{marginTop: '1rem', marginBottom: '1rem'}}>
						<img src={data.github.viewer.avatarUrl} width="200" height="200" style={{borderRadius: '50%'}} alt="profile_img"/>
					</li>
					<li style={{marginLeft:'1rem', color:'darkgrey'}}>
						<Link to={data.github.viewer.url}>
							<p style={{color: 'dodgerblue'}}>{data.github.viewer.login}</p>
						</Link>

						<p>{data.github.viewer.name}</p>
						<p style={{textAlign:'justify'}}>{data.github.viewer.bio}</p>
						
						<p><i class="fa fa-users fa-fw w3-margin-right"></i> <span style={{marginLeft:'-1rem'}}>{data.github.viewer.followers.totalCount}</span> | <i class="fa fa-user-plus fa-fw w3-margin-right"></i> <span style={{marginLeft:'-1rem'}}>{data.github.viewer.following.totalCount}</span></p>
					</li>
				</ul>
				<hr/>
			</div>

		</>
	)
}

export default ProfileGithub