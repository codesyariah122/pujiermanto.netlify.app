import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Star from '../../../components/common/Icons/Star'
import Fork from '../../../components/common/Icons/Fork'


const Projects = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: '5.5rem',
      flexGrow: 1,
      display: 'grid',
      width: '100%'
    },
    card: {
      maxWidth: 345,
      height: '100%'
    },
    heading: {
      fontSize: '18px'
    }
  }));

  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();


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
            repositories(first: 15, orderBy: { field: STARGAZERS, direction: DESC }) {
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
      <Grid fixed className={classes.root} spacing={3}>
        <Grid item md={12}>
          <Grid container justify="left" spacing={spacing}>
          <h1 style={{color: '#000', textAlign: 'justify'}}>My Projects</h1>
          <p style={{textIndent: '25px', fontSize: '15px', lineHeight: '37px', textAlign: 'justify', width:'100%'}}>Ini merupakan dokumentasi dan rekam jejak pribadi saya dalam proses mengerjakan dan mengembangkan sebuah project yang saya kerjakan beberapa waktu sebelumnya, juga sebagai media dokumentasi dan modul-modul dalam mempelajari dan memperluas khazanah saya pribadi dalam mengembangkan minat saya dalam  dunia IT dan Pemrograman.</p>

            {edges.map(({ node }) => (
              <Grid key={node.id} item>
              <Link to={node.url} target="_blank" style={{textDecoration: 'none'}}>
                <Card className={classes.card}>
                  <CardHeader
                    title={node.name}
                    subheader={node.createdAt}
                  />
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p"> {node.description}
                      </Typography>

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

                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
  )

}

export default Projects

