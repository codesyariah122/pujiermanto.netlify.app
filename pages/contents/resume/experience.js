import React from 'react'
import Education from './education'
import Exp from '../../../my.data'
import Link from 'next/link'

const exps = [
	Exp.experience.satu,
	Exp.experience.dua,
	Exp.experience.tiga,
	Exp.experience.empat
]

const Experience = () => {

	return (
		<>
		 <div class="w3-twothird">
		 	<div class="w3-container w3-card w3-white w3-margin-bottom">
          		<h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience
          		</h2>

          		{exps.map(exp => (

          		<div class="w3-container">
		            <h5 class="w3-opacity"><b>{exp.division} | <Link href={exp.link}><a style={{textDecoration: 'none', color: 'teal'}}>
		              {exp.company}</a>
		            </Link></b></h5>

		            <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>{exp.year} 
		 
		            </h6>
           			 <p>{exp.jobdesk}</p>
		        </div>
          		))}

          	</div>

			<Education/>
		 
		 </div>
		</>
	)
}

export default Experience