import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ContactPage = () => {
    return (
        <Layout title="Contact Page">
            <h1>Contact Me</h1>
            <p>The best way to reacth me on via <Link to="https://twitter.com/pujiermanto" target="_blank">pujiermanto</Link></p>
        </Layout>
    )
}

export default ContactPage