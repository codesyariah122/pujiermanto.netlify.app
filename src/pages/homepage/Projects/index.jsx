import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Card, TitleWrap } from '../../../components/common';
import Star from '../../../components/common/Icons/Star'
import Fork from '../../../components/common/Icons/Fork'


const Projects = () => {

  const Wrapper = styled.div`
    color: #000;
    margin-bottom: 2rem;
  `;

  const Grid = styled.div`
    margin-top: 2rem;
    display: grid;
    width: 100%;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 8fr;
    gap: 1.2rem 1.2rem;

    @media (max-width: 960px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 680px) {
      grid-template-columns: 1fr;
    }
  `;

  const Item = styled.div`
    height: 100%;
    overflow: hidden;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
    text-decoration:none;

    h4 {
      color: '#212121';
    }

    p {
      color: '#707070';
    }
  `;

  const Content = styled.div`
    padding: 1rem 0;
    width: 100%;
    min-height: 160px;
    &:hover{
      color: black;
    }
  `;

  const Stats = styled.div`
    display: flex;
    align-items: center;

    div {
      display: flex;
      &:first-child {
        margin-right: 0.5rem;
      }

      img {
        margin: 0;
      }

      svg path {
        fill: '#000';
      }

      span {
        color: '#000';
        margin-left: 0.5rem;
      }
    }
  `;

  const Languages = styled.div`
    opacity: 0.5;
    font-size: 14px;
  `;

const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      query{
        github {
          viewer {
            repositories(first: 25, orderBy: { field: STARGAZERS, direction: DESC }) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  createdAt
                  stargazers {
                    totalCount
                  }
                  forkCount
                  languages(first: 4) {
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
        <h2 style={{color: '#000', textAlign: 'justify'}}>My Projects</h2>
            <p style={{textIndent: '25px', fontSize: '15px', lineHeight: '37px', textAlign: 'justify', width:'100%'}}>Ini merupakan dokumentasi dan rekam jejak pribadi saya dalam proses mengerjakan dan mengembangkan sebuah project yang saya kerjakan beberapa waktu sebelumnya, juga sebagai media dokumentasi dan modul-modul dalam mempelajari dan memperluas khazanah saya pribadi dalam mengembangkan minat saya dalam  dunia IT dan Pemrograman.</p>
      <Grid>
        {edges.map(({ node }) => (
          <Item key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer">
            <Card>
              <Content>
                <h4>{node.name}</h4>
                <h5 style={{color:'grey'}}>{node.createdAt}</h5>
                <p>{node.description}</p>
              </Content>
              <TitleWrap>
                <Stats>
                  <div>
                    <Star/>
                    <span>{node.stargazers.totalCount}</span>
                  </div>
                  <div>
                    <Fork/>
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
  )

}

export default Projects

