import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery} from 'gatsby'
import { Container, Card, TitleWrap } from '../../components/common';


const BlogList = () => {

	const Wrapper = styled.div`
    color: #000;
    margin-bottom: 2rem;
    margin-top: 5rem;
  `;

  const Grid = styled.div`
    margin-top: 2rem;
    display: grid;
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
    width: 100%;
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
    min-height: 160px;
    &:hover{
      color: black;
    }
  `;

	const data = useStaticQuery(graphql`
			query{
			   allMarkdownRemark(
          sort: {
            fields:[frontmatter___date]
            order: DESC
          }
        ){
			    edges{
			      node{
					frontmatter{
			          title
			          date(formatString:"MMMM D YYYY")
			          published
			          author
			          images{
			          	name
			            relativePath
			            ext
			          }
			        }
			        html
			        excerpt(pruneLength: 50)
			        fields {
			        	slug
			        }
			      }
			    }
			  }
			}
		`)

	return (
		<>
		 <Wrapper as={Container} id="projects">
		 	<h2 style={{color: '#000', textAlign: 'justify'}}>The Articles</h2>
		 	{/*<p style={{textIndent: '21px', fontSize: '18px', lineHeight: '37px', textAlign: 'justify', width:'100%'}}>
		 		Catatan dokumentasi perjalanan hidup yang dikemas dengan alur yang tak berarah dengan maksud menambah khazanah intelektualitas bagi kualitas khalayak umat. <br/> 
		 		<span style={{color: 'DodgerBlue'}}>sebuah dedikasi bagi kehidupan pribadi ...
		 		</span>
		 	</p>*/}
		 	<Grid>
			{data.allMarkdownRemark.edges.map(edge => (
				<>
				<Item key={edge.node.frontmatter.author} as="a" href={`/about/${edge.node.fields.slug}`} rel="noopener noreferrer">
					<Card>
						<Content>

						{/*<img src={`./${edge.node.frontmatter.images.name}${edge.node.frontmatter.images.ext}`} />*/}

						<h3 style={{color: '#000', textAlign: 'left'}}>{edge.node.frontmatter.title}</h3>
						<p style={{color: 'grey'}}>{edge.node.excerpt}</p>
						<TitleWrap>
							{edge.node.frontmatter.date} | {edge.node.frontmatter.author}
						</TitleWrap>

						</Content>
					</Card>
				</Item>
				</>
			))}
			</Grid>
		</Wrapper>
		</>
	)
}

export default BlogList