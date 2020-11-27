import { format } from 'prettier'
import React from 'react'
import { Link } from 'gatsby' 

import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>I currently teach full-time on Udemy.</p>
            <p><Link to="/contact">Want to Work with me ? </Link></p>
        </Layout>
    )
}

export default AboutPage