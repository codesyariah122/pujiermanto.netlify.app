import React from 'react'
import {Link} from 'gatsby'

const Footer = () => {
    return (
        <footer class="w3-container w3-teal w3-center w3-margin-top">
            <p>Back to home</p>
            <Link to='/' target="_blank">
                    <i class="icon-directions icons"></i>
                </Link>
        </footer>
    )
}

export default Footer