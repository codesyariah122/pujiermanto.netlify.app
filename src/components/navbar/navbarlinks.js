import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'



const NavItem = styled(Link)`
    text-decoration: none;
    color: #111;
    display: inline-block;
    white-space: nowrap;
    margin: 0 1vw;
    transition: all 200ms ease-in;
    position: relative;
    font-family: 'Source Code Pro', monospace;

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

    &:hover {
    color: goldenrod;
    &:after {
        width: 75%;
    }
    }

    @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
    }   

    &.active {
        font-weight: 700;

        &:after{
            content:'';
            position: absolute;
            bottom:-5px;
            left:0;
            width:30px;
            height:2px;
            background-color:goldenrod;
        }
    }
`


const NavbarLinks = () => {

    const pageLink = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    menu {
                        home 
                        about 
                        resume
                        contact
                    }
                }
            }
        }
    `)
    const NavData = [
        {"href": pageLink.site.siteMetadata.menu.home, "label": "Home"},
        {"href": pageLink.site.siteMetadata.menu.about, "label": "About"},
        {"href": pageLink.site.siteMetadata.menu.contact, "label": "Contact"},
        {"href": pageLink.site.siteMetadata.menu.resume, "label": "Resume"}
    ]
    return (
        <>
        {NavData.map(nav => (
            <NavItem to={nav.href} activeClassName="active"> {nav.label} </NavItem>
        ))}
        </>
    )
}

export default NavbarLinks
