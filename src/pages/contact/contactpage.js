import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'

const ContainerStyle = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Source+Code+Pro&family=Yellowtail&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
font-family: 'Source Code Pro', monospace;
	display: block
	width: 100%;
	height: auto;
	margin-top: 3rem;
`

const HeadingStyle = styled.h1`
	font-family: 'Poiret One', cursive;
	font-size: 1.7rem;
	color: #000;
`

const ContactPages = () => {
	return (
		<ContainerStyle>
			<Container>
			<HeadingStyle>Hallo Everybody</HeadingStyle>
			<p>Are You Need Developer, Please Contact Me ... </p>
			    <Button variant="contained" color="primary">
			    	Contact Pages
			    </Button>
			</Container>
		</ContainerStyle>
	)
}

export default ContactPages