import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import { Container } from '../../components/common';
import contact from '../../images/animated/contactpage.gif';
import { Wrapper, Details, Thumbnail } from './style';
import ContactForm from './ContactForm';


const ContactPages = () => {
	
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
		<Wrapper as={Container} id="contact">
		    <Details>
		      <ContactForm />
		    </Details>
		    <Thumbnail>
		      <img src={contact} alt={`Hallo I'am ${data.site.siteMetadata.author.full} & I'am a ${data.site.siteMetadata.author.hoby.dua}`} />
		    </Thumbnail>
		  </Wrapper>
	)
}

export default ContactPages