import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Navbar from './module/layout.module.scss'

const Navigation = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    menu {
                        home
                        about
                        portfolio
                        contact
                    }
                }
            }
        }
    `);
    
    return (
        <div className={Navbar.navbar} id="navbar">
            <Link to={data.site.siteMetadata.menu.home}>Home</Link>
            <Link to={data.site.siteMetadata.menu.about}>About</Link>
            <Link to={data.site.siteMetadata.menu.portfolio}>Portfolio</Link>
            <Link to={data.site.siteMetadata.menu.contact}>Contact</Link>
        </div>
    )
}

export default Navigation

