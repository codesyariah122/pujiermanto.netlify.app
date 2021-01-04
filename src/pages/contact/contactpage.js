import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {ContainerStyle, HeadingStyle} from './style'

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