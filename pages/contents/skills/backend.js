import React from 'react'
import Devs from '../../../my.data'


const data = [
	{
		"text": Devs.skills.type.satu,
		"label":{
			"php": {
				"name":Devs.skills.webdev.satu.php.name,
				"percent": Devs.skills.webdev.satu.php.value
			},
			"node": {
				"name": Devs.skills.webdev.satu.node.name,
				"percent": Devs.skills.webdev.satu.node.value
			},
			"python": {
				"name": Devs.skills.webdev.satu.python.name,
				"percent": Devs.skills.webdev.satu.python.value
			},
			"ruby": {
				"name":Devs.skills.webdev.satu.ruby.name,
				"percent": Devs.skills.webdev.satu.ruby.value
			}
		}
	},

]

const BackEnd = () => {
	return (
		<>
		{/* Backend Skill */}
			 	 {
			 	 	data.map(value => (
			 	 		<>
			 	 			<p><b><u>{value.text}</u></b></p>

			 	 			<ul style={{listStyle:'none'}}>
			 	 				<li>
			 	 					{value.label.php.name}
			 	 					 <div class="w3-light-grey w3-round-xlarge w3-small">
							          <div class="w3-container w3-center w3-round-xlarge w3-teal php">
							            {value.label.php.percent}
							          </div>
							        </div>
			 	 				</li>
			 	 				<li>
			 	 				{value.label.node.name}
			 	 				<div class="w3-light-grey w3-round-xlarge w3-small">
							          <div class="w3-container w3-center w3-round-xlarge w3-teal node">
							            {value.label.node.percent}
							          </div>
							        </div>
			 	 				</li>
			 	 				<li>
			 	 				{value.label.python.name}
			 	 				<div class="w3-light-grey w3-round-xlarge w3-small">
							          <div class="w3-container w3-center w3-round-xlarge w3-teal python">
							            {value.label.python.percent}
							          </div>
							        </div>
			 	 				</li>
			 	 				<li>
			 	 				{value.label.ruby.name}
			 	 				<div class="w3-light-grey w3-round-xlarge w3-small">
							          <div class="w3-container w3-center w3-round-xlarge w3-teal ruby">
							            {value.label.ruby.percent}
							          </div>
							        </div>
			 	 				</li>
			 	 			</ul>
			 	 		</>
			 	 	))
			 	 }
			 	 {/* Backend Skill */}
		</>
	)
}

export default BackEnd