import React from 'react'
import styled from 'styled-components'
import Img from 'next/image'
import Devs from '../../../my.data'

const DataDev = [
	Devs.dev.puji
]

const AvatarWrap = styled.div`
margin: auto 0;
flex: 0 1 36px;
@media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
}
`
const Avatar = () => {
	return (
		<AvatarWrap>
			{DataDev.map(data => (
			<>
				<Img 
					src={data.nama.avatar} 
					alt="uji-ganteng" 
					width="400" 
					height="400" 					
				/>

				 <div class="w3-display-bottomleft w3-container w3-text-black">
		            <h2>{data.nama.label}</h2>
		            <blockquote style={{color:'rgba(255, 111, 100, 0.9)', marginLeft: '-.1rem', marginTop: '-1rem'}}>
		                {data.nama.tags}
		            </blockquote>
	            </div>
			</>
			))}
		</AvatarWrap>
	)
}

export default Avatar