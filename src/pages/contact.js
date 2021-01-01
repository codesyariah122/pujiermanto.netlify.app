import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import Layout from "../components/layouts/layout"
import ContactPage from './contact/contactpage'

const Contact = () => {
   
    return (
    	<Layout title="Contact Page">
    		<ContactPage/>
        </Layout>
    )
}
export default Contact