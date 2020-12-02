import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'jquery/dist/jquery.min.js'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import 'popper.js/dist/popper.min.js'
// import { Container } from 'react-bootstrap'

import Header from './header'
import Footer from './footer'
import Navigation from './navbar/navbar'
import '../styles/index.scss'

import SeoPage from './seo'

const Layout = (props) => {

    return (
        <>
            <div>
            <SeoPage/>
                <Navigation/>
                <div class="main-content">
                    <Header/>
                        {/* <Container> */}
                        {props.children}
                        {/* </Container> */}
                    <Footer/>
                </div>               
            </div>
        </>
    )
}

export default Layout


