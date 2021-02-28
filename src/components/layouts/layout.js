import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'jquery/dist/jquery.min.js'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import 'popper.js/dist/popper.min.js'
// import { Container } from 'react-bootstrap'

import Header from './header'
import Footer from './footer'
import '../../styles/index.scss'

import SeoPage from './seo'

const Layout = (props) => {
    
    return (
        <>
            <SeoPage title={props.title}/>
                <Header/>
                <div class="main-content">
                        {/* <Container> */}
                        {props.children}
                        {/* </Container> */}
                    <Footer/>
                </div>               
        </>
    )
}

export default Layout


