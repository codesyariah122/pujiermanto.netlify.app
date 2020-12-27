import React from 'react'
import Devs from '../../../my.data'
import BackEnd from '../skills/backend'
import MarkUp from '../skills/markup'

const DataDevs = [
	Devs.dev.puji.nama,
	Devs.dev.puji.working,
	Devs.dev.puji.city,
	Devs.dev.puji.email,
	Devs.dev.puji.phone
]

const Skills = () => {
	
	return (
		<>
			 <div class="w3-container">
				{DataDevs.map(data => (
					<p><i class={`fa ${data.icon} fa-fw w3-margin-right w3-large w3-text-teal`}></i>
					{data.label}
				</p>
				))}
				<br/>
			 	 <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>

			 	 	<BackEnd/>

			 	 	<MarkUp/>
			 </div>
		</>
	)
}

export default Skills