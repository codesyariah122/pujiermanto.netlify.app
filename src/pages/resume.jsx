import React from 'react'
import Layout from "../components/layouts/layout"
import './resume/content.scss'
import {Helmet} from 'react-helmet'
import {withPrefix} from 'gatsby'
import MyResumeContent from './resume/myresumecontent'

const Resume = () => {
    return (
        <Layout title="Resume Puji">
        
        <Helmet>
            <link href={withPrefix('https://www.w3schools.com/w3css/4/w3.css')} rel="stylesheet" type="text/css" />
            <link rel='stylesheet' href={withPrefix('https://fonts.googleapis.com/css?family=Roboto')} />
            <link rel="stylesheet" href={withPrefix('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css')} />
            <link href={withPrefix('https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css')} rel="stylesheet" type="text/css" />
            <script type="text/javascript">
              document.querySelector('body').classList.add('w3-light-grey');
            </script>
        </Helmet>

            <MyResumeContent/>
        
        </Layout>
    )
}

export default Resume