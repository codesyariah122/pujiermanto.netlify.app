import React from 'react'
import Devs from '../../../my.data'


const data = [
	{
		"text": Devs.skills.type.dua,
		"label":{
			"markup": {
				"name":Devs.skills.webdev.dua.markup.name,
				"percent": Devs.skills.webdev.dua.markup.value
			}
		}
	},

]

const MarkUp = () => {
	return (
		<>
		{/* Backend Skill */}
			 	 {
			 	 	data.map(value => (
			 	 		<>
			 	 			<p><b><u>{value.text}</u></b></p>

			 	 			<ul style={{listStyle:'none'}}>
			 	 				<li>
			 	 					{value.label.markup.name}
			 	 					 <div class="w3-light-grey w3-round-xlarge w3-small">
							          <div class="w3-container w3-center w3-round-xlarge w3-teal markup">
							            {value.label.markup.percent}
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

export default MarkUp