import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'jquery/dist/jquery.min.js'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import 'popper.js/dist/popper.min.js'
import Header from './header'
import Footer from './footer'
import Navigation from './navbar'
import '../styles/index.scss'
import { withPrefix, Link } from "gatsby"
import { Helmet } from "react-helmet"
// import { Container } from 'react-bootstrap'


const Layout = (props) => {
    return (
        <div>
            <Navigation/>
            <div class="main-content">
                <Header/>
                    {/* <Container> */}
                    {props.children}
                    {/* </Container> */}
                <Footer/>
            </div>
            <Helmet>
                <link href={withPrefix('https://fonts.googleapis.com/css2?family=Poiret+One&family=Viga&display=swap')} rel="stylesheet" />
                <link href={withPrefix('https://fonts.googleapis.com/css?family=Roboto')} rel="stylesheet" type="text/css" />
                <link href={withPrefix('https://fonts.googleapis.com/css?family=Montserrat:900')} rel="stylesheet"></link>
                <link href={withPrefix('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css')} rel="stylesheet" type="text/css" />
                <link href={withPrefix('https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css')} rel="stylesheet" type="text/css" />
            </Helmet>
        </div>
    )
}

export default Layout


