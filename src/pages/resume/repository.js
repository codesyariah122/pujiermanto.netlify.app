import React from 'react'
import{Link, graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'



const Repository = () => {
    
    const LinkStyle = styled(Link)`
        text-decoration: none;
        color: cornflowerblue;
        &:hover{
            color: teal;
        }
    `

    const data = useStaticQuery(graphql`
        query {
          allGithubData {
            nodes {
              data {
                user {
                  repositories {
                    nodes {
                        openGraphImageUrl
                        name
                        url
                        description
                        forkCount
                        readme {
                            text
                        }
                        stargazers {
                            totalCount
                      }
                    }
                  }
                }
              }
            }
          }
        }
    `);

    const Repos = data.allGithubData.nodes[0].data.user.repositories.nodes

    return (
        <div class="w3-container w3-card w3-white">

            <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-github-alt fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>My Github Project</h2>
            
            <div class="w3-container">
                <p style={{textDecoration: 'none', color: 'teal'}}>Dokumentasi Web Development | Frontend Developer | Backend Developer
                </p>
            <img src={Repos[0].openGraphImageUrl} width="200" height="200" style={{borderRadius: '50%'}}/>
            </div>
            {
                Repos.map(repo => (
                <>
                    <div class="w3-container">
                    <h3 class="w3-text">
                    <LinkStyle to={repo.url}>{repo.name}</LinkStyle>
                    </h3>
                    <Link to={repo.url} style={{textDecoration:'none'}}>
                        <p class="w3-opacity">
                        <b>Desc:</b> {repo.description}</p>
                    </Link>
                    <ul style={{listStyleType:'none', display:'flex'}}>
                        <li>
                            <Link to={repo.url} style={{textDecoration:'none'}}><i class="fa fa-code-fork fa-fw w3-margin-right" style={{fontSize: '23px', color: 'blue'}}></i><span style={{fontSize:'12px', marginLeft:'-20px', marginRight:'25px'}}>{repo.forkCount}</span>
                            </Link>
                        </li>
                        <li>
                        <Link to={repo.url} style={{textDecoration:'none'}}>
                            <i class="fa fa-star-o fa-fw w3-margin-right" style={{fontSize: '23px', color: 'goldenrod'}}></i><span style={{fontSize:'12px', marginLeft:'-10px', marginRight:'15px'}}>{repo.stargazers.totalCount}</span>
                        </Link>
                        </li>
                    </ul>
                    </div>
                    <hr/>
                </>
                ))
            }
            
        </div>
    )
}

export default Repository