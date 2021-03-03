import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layouts/layout"
import '../styles/hero.scss'


export const query = graphql`
	
	query($slug: String!){
		markdownRemark(fields: {slug: { eq: $slug } }) {
			frontmatter {
				title
				date(formatString:"MMMM D YYYY")
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

				<h3 style={{color: 'rgba(0, 0, 0, 0.7)', textAlign: 'left', marginTop: '3.5rem', marginLeft: '-.1rem'}}>{props.data.markdownRemark.frontmatter.title}</h3>
				<p>{props.data.markdownRemark.frontmatter.date}</p>


				<div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>

			</section>
		</Layout>
	)
}

export default Blog