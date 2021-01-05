import React from 'react'
import Layout from "../components/layouts/layout"
import ContactPage from './contact/contactpage'
import styled from 'styled-components'

const ContentContact = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Source+Code+Pro&family=Yellowtail&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
font-family: 'Source Code Pro', monospace;
`
const Container = styled.div`
    width: 50%;
    text-align: justify;
    margin-left:7.7rem;
`

const H1 = styled.h1`
font-family: 'Poiret One', cursive;
font-size: 3rem;
color: #000;
font-weight: 500;
`

const Contact = () => {
   
    return (
    	<Layout title="Contact Page">
    	<ContentContact>
            
            <Container>
            	<H1>Hallo EveryBody</H1>
            	<p> 
            		Are You Need Developer .... <br/>
            		<span style={{color: 'darksalmon'}}>Please</span> <b> Contact Me </b>
            	</p>
            </Container>
    		
            <ContactPage/>

    	</ContentContact>
        </Layout>
    )
}
export default Contact