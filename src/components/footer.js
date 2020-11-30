import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
// import footerStyles from './module/footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    email
                    github
                    dribbble
                }
            }
        }
    `);
    const date = new Date();
    const year = date.getFullYear();
    const profileData = {
        'home': '/',
        'portfolio': '/portfolio',
        'contact': '/contact',
        'blog': '/blog',
        'twitter': `https://twitter.com/${data.site.siteMetadata.author}`,
        'github': `https://github.com/${data.site.siteMetadata.github}`,
        'dribbble': `https://dribbble.com/${data.site.siteMetadata.dribbble}`
    }

    return (
            <footer>
                {/* <Link to={profileData.home}>
                    <i class="icon-home icons"></i>
                </Link>
                <Link to={profileData.portfolio} target="_blank">
                    <i class="icon-docs icons"></i>
                </Link>
                <Link to={profileData.contact} target="_blank">
                    <i class="icon-envelope-open icons"></i>
                </Link>
                <Link to={profileData.blog} target="_blank">
                    <i class="icon-book-open icons"></i>
                </Link> */}
                <Link to={profileData.twitter} target="_blank">
                    <i class="icon-social-twitter icons"></i>
                </Link>

                <Link to={profileData.github} target="_blank">
                    <i class="icon-social-github icons"></i>
                </Link>

                <Link to={profileData.dribbble} target="_blank">
                    <i class="icon-social-dribbble icons"></i>
                </Link>
            </footer>
    )
}

export default Footer