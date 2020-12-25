import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const LogoWrap = styled.div`
margin: auto 0;
flex: 0 1 36px;
width:80%;
@media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
}
`

const Logo = () => {
    return (
    	<>
    	<LogoWrap>
	      	<Image 
	         	src="/favicon.png"
	         	alt="MyLogo"
	         	width={500}
	         	height={500}
	        />
	   	</LogoWrap>
    	</>
    )
}

export default Logo