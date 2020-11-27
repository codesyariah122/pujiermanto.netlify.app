import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import {Card, Button} from 'react-bootstrap'

const IndexPage = () => {
  return (
    <Layout>
        <h1>Hello World</h1>
        <h2>I'm Puji Ermanto a full stack developer living in Bandung</h2>
        <p>Need a developer <Link to="/contact">Contact Me</Link></p>
    </Layout>
   )
}

export default IndexPage