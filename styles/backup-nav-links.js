import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

const Navigation = styled.nav`
    height: 10vh;
    display: flex;
    background-color: #fff;
    position: relative;
    justify-content: space-between;
    text-transform: uppercase;
    border-bottom: 2px solid #33333320;
    margin: 0 auto;
    padding: 0 5vw;
    z-index: 2;
    align-self: center;
    position: sticky;
    top: 0;
    width: 100%;
    margin-top: -.5rem;
    @media (max-width: 768px) {
    position: sticky;
    height: 12vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    }
`

const Toggle = styled.div`
    display: none;
    height: 100%;
    cursor: pointer;
    padding: 0 10vw;
    @media (max-width: 768px) {
    display: flex;
    }
`

const NavBox = styled.div`
    display: flex;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
    @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 11.5vh;
    z-index:-1;
    left: ${props => (props.open ? "-100%" : "0")};
    }
`

const Hamburger = styled.div`
    background-color: #111;
    width: 30px;
    height: 3px;
    transition: all .3s linear;
    align-self: center;
    position: relative;
    transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
    ::before,
    ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
    }
    ::before {
    transform: ${props =>
        props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
    }
    ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
    }
`

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
    margin-left: 1rem;
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

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false)
	return (
		<>
			<Navigation>

		       <Toggle
                navbarOpen={navbarOpen}
                onClick={() => setNavbarOpen(!navbarOpen)}>
                    {navbarOpen ? <Hamburger open /> : <Hamburger />}
                </Toggle>
                
                {navbarOpen ? (
                	<NavBox>
                		<Link href="/"><a>Unexpected</a></Link>
                		<NavItem href="/"> > Home
                		</NavItem>
                		<NavItem href="/about">About
                		</NavItem>
                		<NavItem href="/contact">Contact
                		</NavItem>
                	</NavBox>
                ) : (

                	<NavBox open>
                		<Link href="/"><a>Unexpected</a></Link>
                		<NavItem href="/"> > Home
                		</NavItem>
                		<NavItem href="/about">About
                		</NavItem>
                		<NavItem href="/contact">Contact
                		</NavItem>
                	</NavBox>
                )}

		     </Navigation>
		</>
	)
}

export default Navbar