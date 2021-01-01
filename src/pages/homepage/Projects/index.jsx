import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Card, TitleWrap } from '../../../components/common';
import Star from '../../../components/common/icons/Star'
import Fork from '../../../components/common/icons/Fork'
import {Wrapper, Grid, Item, Content, Stats, Languages} from './styles'

const Projects = () => {

const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(first: 15, orderBy: { field: STARGAZERS, direction: DESC }) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                  languages(first: 3) {
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
    <Wrapper as={Container} id="projects">
      <h1 style={{color: '#000', textAlign: 'justify'}}>My Projects</h1>
      <p>Ini merupakan bagian project atau pekerjaan yang sempat saya kerjakan beberapa waktu sebelumnya, dan juga sebagai documentasi modul dalam mempelajari dan memperluas khazanah dalam dunia programming saya.</p>
      <Grid>
        {edges.map(({ node }) => (
          <Item key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer">
            <Card>
              <Content>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </Content>
              <TitleWrap>
                <Stats>
                  <div>
                    <Star color="#000" />
                    <span>{node.stargazers.totalCount}</span>
                  </div>
                  <div>
                    <Fork color="light"/>
                    <span>{node.forkCount}</span>
                  </div>
                </Stats>
                <Stats>
                  <Languages>
                    {
                      node.languages.nodes.map(({ id, name }) => (
                        <span key={id}>
                          {name}
                        </span>
                      ))
                    }
                  </Languages>
                </Stats>
              </TitleWrap>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );

}

export default Projects
