import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'



const ProfileGithub = () => {

	const data = useStaticQuery(graphql`
		query {
			github{
		    viewer {
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
			<div class="w3-light-grey">
				<ul style={{listStyle:'none', display: 'flex'}}>
					<li style={{marginTop: '1rem', marginBottom: '1rem'}}>
						<img src={data.github.viewer.avatarUrl} width="200" height="200" style={{borderRadius: '50%'}} alt="profile_img"/>
					</li>
					<li style={{marginLeft:'1rem', color:'darkgrey'}}>
						<p>{data.github.viewer.login}</p>
						<p>{data.github.viewer.name}</p>
						<p style={{textAlign:'justify'}}>{data.github.viewer.bio}</p>
						<hr/>
						<p><i class="fa fa-users fa-fw w3-margin-right"></i> <span style={{marginLeft:'-1rem'}}>{data.github.viewer.followers.totalCount}</span> | <i class="fa fa-user-plus fa-fw w3-margin-right"></i> <span style={{marginLeft:'-1rem'}}>{data.github.viewer.following.totalCount}</span></p>
					</li>
				</ul>
			</div>

		</>
	)
}

export default ProfileGithub