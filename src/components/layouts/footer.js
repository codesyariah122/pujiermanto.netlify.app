import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
// import footerStyles from './module/footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author {
                        blog
                        twitter
                        github
                        dribbble
                    }
                }
            }
        }
    `);
    
    const Links = [
        {
            'url': `https://${data.site.siteMetadata.author.blog}`,
            'icon': 'icon-globe'
        },
        {
            'url': `https://twitter.com/${data.site.siteMetadata.author.twitter}`,
            'icon': 'icon-social-twitter'
        },
        {
            'url': `https://github.com/${data.site.siteMetadata.author.github}`,
            'icon': 'icon-social-github'
        },
        {
            'url': `https://dribbble.com/${data.site.siteMetadata.author.dribbble}`,
            'icon': 'icon-social-dribbble'
        }
    ]

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
                {
                    Links.map(link => (
                        <>
                        <Link to={link.url} target="_blank">
                            <i class={`${link.icon} icons`}></i>
                        </Link>
                        </>
                    ))
                }

            </footer>
    )
}

export default Footer