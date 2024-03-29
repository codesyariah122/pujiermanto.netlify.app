import React from 'react'
import{Link, graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'
import ProfileGithub from './profilegithub'


const Repository = () => {
    
    const LinkStyle = styled(Link)`
        text-decoration: none;
        color: cornflowerblue;
        &:hover{
            color: teal;
        }
    `

    // const data = useStaticQuery(graphql`
    //     query {
    //       allGithubData {
    //         nodes {
    //           data {
    //             user {
    //               nodesitories {
    //                 nodes {
    //                     openGraphImageUrl
    //                     name
    //                     url
    //                     description
    //                     forkCount
    //                     readme {
    //                         text
    //                     }
    //                     stargazers {
    //                         totalCount
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    // `);
    // const nodes = data.allGithubData.nodes[0].data.user.nodesitories.nodes

    const {
        github: {
          viewer: {
            repositories: { edges },
          },
        },
      } = useStaticQuery(
        graphql`
         query {
            github {
              viewer {
                repositories(last: 7, orderBy: { 
                  field: UPDATED_AT, direction: ASC
                }) {
                  edges {
                    node {
                        openGraphImageUrl
                        id
                        name
                        url
                        description
                        stargazers {
                            totalCount
                        }
                        forkCount
                      languages(first: 2) {
                        nodes {
                          id,
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `
      );


    return (
        <div className="w3-container w3-card w3-white">

            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-github-alt fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>My Github Story</h2>
                
            <div className="w3-container">
                <p style={{textDecoration: 'none', color: 'teal'}}>Dokumentasi Web Development | Frontend Developer | Backend Developer
                </p>

            <ProfileGithub/>
            
            
            </div>
            {
                edges.map(({ node }) => (
                <>
                    <div className="w3-container">
                    <h3 className="w3-text">
                    <LinkStyle to={node.url}>{node.name}</LinkStyle>
                    </h3>
                    <Link to={node.url} style={{textDecoration:'none'}} target="_blank" rel="noreferrer">
                        <p className="w3-opacity">
                        <b>Desc:</b> {node.description}</p>
                    </Link>
                    <ul style={{listStyleType:'none', display:'flex'}}>
                        <li>
                            <Link as="a" to={node.url} style={{textDecoration:'none'}} target="_blank" rel="noreferrer"><i className="fa fa-code-fork fa-fw w3-margin-right" style={{fontSize: '23px', color: 'blue'}}></i><span style={{fontSize:'12px', marginLeft:'-20px', marginRight:'25px'}}>{node.forkCount}</span>
                            </Link>
                        </li>
                        <li>
                        <Link as="a" to={node.url} style={{textDecoration:'none'}} target="_blank" rel="noreferrer">
                            <i className="fa fa-star-o fa-fw w3-margin-right" style={{fontSize: '23px', color: 'goldenrod'}}></i><span style={{fontSize:'12px', marginLeft:'-10px', marginRight:'15px'}}>{node.stargazers.totalCount}</span>
                        </Link>
                        </li>

                        {
                            node.languages.nodes.map(({ id, name }) => (
                            <li style={{marginLeft: '2rem', marginTop: '.3rem', color: 'dodgerblue'}}>
                                <Link as="a" to={node.url} style={{textDecoration:'none'}} target="_blank" rel="noreferrer">
                                <span style={{fontSize:'12px', marginLeft:'-10px', marginRight:'15px'}}>{name}</span>
                                </Link>
                            </li>
                        ))
                    }
                    </ul>
                    </div>
                    <hr/>
                </>
                ))
            }
            <br/><br/>    
        </div>
    )
}

export default Repository