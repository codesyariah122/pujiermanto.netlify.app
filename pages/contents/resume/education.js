import React from 'react'
import {withRouter} from 'next/router'
import Edu from '../../../my.data'

const edus = [
	Edu.education.satu,
	Edu.education.dua,
	Edu.education.tiga
]

const Education = ({router}) => {

	return (
		<>
			<div class="w3-container w3-card w3-white">
	            <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
	            <div class="w3-container">
	            <h5 class="w3-opacity"><b>W3Schools.com</b></h5>
	            <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Forever</h6>
	            <p>Web Development! All I need to know in one place</p> 
	            </div>

	            {edus.map(edu => (
				<div class="w3-container">
		            <h5 class="w3-opacity"><b>
		            	{edu.fokus} | {edu.school}
		            </b></h5>
		            	
		            	<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>{edu.year}</h6>
		            	<p>{edu.degre}</p>        
	            </div>
	     		))}
	        </div>
		</>
	)
}

export default Education