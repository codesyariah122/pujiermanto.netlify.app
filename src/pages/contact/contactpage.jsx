import React, { Fragment } from 'react'
import styled from 'styled-components'
import {graphql, useStaticQuery} from 'gatsby'
import { Container } from '../../components/common';
// import contact from '../../images/animated/contactpage.gif';
import Artwork from './Artwork'
import ContactForm from './ContactForm';


const ContactPages = () => {
	const Wrapper = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Source+Code+Pro&family=Yellowtail&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
	font-family: 'Source Code Pro', monospace;
	  padding: 4rem 0;
	  display: flex;
	  align-items: flex-start;
	  justify-content: space-between;
	  @media (max-width: 960px) {
	    flex-direction: column;
	  }
	`;
	const Details = styled.div`
	  flex: 1;
	  padding-right: 2rem;
	  @media (max-width: 960px) {
	    padding-right: unset;
	    width: 100%;
	    order: 1;
	  }
	  h1 {
	    margin-bottom: 2rem;
	    font-size: 26pt;
	    color: #212121;
	  }
	  p {
	    margin-bottom: 2.5rem;
	    font-size: 20pt;
	    font-weight: normal;
	    line-height: 1.3;
	    color: #707070;
	  }
	`;

	const Thumbnail = styled.div`
	  flex: 1;
	  @media (max-width: 960px) {
	    width: 100%;
	    margin-bottom: 2rem;
	  }
	  img {
	    width: 100%;
	  }
	`;

	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata{
					author{
						full
						hoby {
							dua
						}
					}
				}
			}
		}
	`)

	return (
		<Fragment>
			<Wrapper as={Container} id="contact">
				<Details>
					<ContactForm />
				</Details>
				    {/*<Thumbnail>
				      <img src={contact} alt={`Hallo I'am ${data.site.siteMetadata.author.full} & I'am a ${data.site.siteMetadata.author.hoby.dua}`} />
				  </Thumbnail>*/}
			</Wrapper>
			<Artwork/>
		</Fragment>
	)
}

export default ContactPages