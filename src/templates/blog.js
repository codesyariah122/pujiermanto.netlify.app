import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layouts/layout"
import '../styles/hero.scss'


export const query = graphql`
	
	query($slug: String!){
		markdownRemark(fields: {slug: { eq: $slug } }) {
			frontmatter {
				title
				date
				author
			}
			html
		}
	}
	
`

const Blog = (props) => {


	return (
		<Layout title="Post Page | Unexpected Kernel Mode">
			<section className="post">

				<h2 style={{color: '#000', textAlign: 'justify'}}>{props.data.markdownRemark.frontmatter.title}</h2>
				<p>{props.data.markdownRemark.frontmatter.date}</p>

				<div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>

			</section>
		</Layout>
	)
}

export default Blog