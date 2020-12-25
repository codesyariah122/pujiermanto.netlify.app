import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const NavItem = styled(Link)`
    text-decoration: none;
    color: #111;
    display: inline-block;
    white-space: nowrap;
    margin: 0 1vw;
    transition: all 200ms ease-in;
    position: relative;
    :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
    }
    :hover {
    color: goldenrod;
    ::after {
        width: 100%;
    }
    }
    @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
    }
`

const NavbarLinks = () => {

    return (
        <>
        	<NavItem href="/"activeStyle={{color: '#808080'}}>
        		Home
        	</NavItem>
    
        	<NavItem href="/about" activeStyle={{color: '#808080'}}>
        		About
        	</NavItem>
	       
	       <NavItem href="/contact" activeStyle={{color: '#808080'}}>
	       		Contact
	       </NavItem>
        </>
    )
}

export default NavbarLinks