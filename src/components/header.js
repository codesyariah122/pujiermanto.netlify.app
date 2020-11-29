import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
// import layoutStyles from './module/layout.module.scss'

// import headerStyles from './module/layout.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    author
                    email
                }
            }
        }
    `);
    return (
        <div class="concept concept-one">
          <div class="hover hover-1"></div>
          <div class="hover hover-2"></div>
          <div class="hover hover-3"></div>
          <div class="hover hover-4"></div>
          <div class="hover hover-5"></div>
          <div class="hover hover-6"></div>
          <div class="hover hover-7"></div>
          <div class="hover hover-8"></div>
          <div class="hover hover-9"></div>
          <h1>Assalamualaikum</h1>
           <h2>Selamat Datang di Ruang kerjaku</h2>
        </div>
    )
}

export default Header