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
			<div className="w3-container">
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
						
						<p><i className="fa fa-users fa-fw w3-margin-right"></i> <span style={{marginLeft:'-1rem'}}>{data.github.viewer.followers.totalCount}</span> | <i className="fa fa-user-plus fa-fw w3-margin-right"></i> <span style={{marginLeft:'-1rem'}}>{data.github.viewer.following.totalCount}</span></p>
					</li>
				</ul>
				<hr/>
				<img src="https://raw.githubusercontent.com/codesyariah122/codesyariah122/00b160c14fe54d58bc6ae7ca3459a4b4bec15c20/profile-summary-card-output/dracula/0-profile-details.svg" alt="profile-card" width="450"/>
				<br/>
				<br/>
				<img src="https://raw.githubusercontent.com/codesyariah122/codesyariah122/00b160c14fe54d58bc6ae7ca3459a4b4bec15c20/profile-summary-card-output/dracula/1-repos-per-language.svg" alt="profile-language"/>

				<br/>
				<br/>
				<img src="https://raw.githubusercontent.com/codesyariah122/codesyariah122/00b160c14fe54d58bc6ae7ca3459a4b4bec15c20/profile-summary-card-output/dracula/3-stats.svg" alt="profile-stats"/>
				<br/>
				<br/>

				<hr/>
			</div>

		</>
	)
}

export default ProfileGithub