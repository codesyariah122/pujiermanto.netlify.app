import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './module/layout.module.scss'

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header/>
                    {props.children}
            </div>
                <Footer/>
        </div>
    )
}

export default Layout