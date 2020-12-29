import React from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'
import Navigation from './navbar/navbar'

const Header = () => {

    return (
    	<>
            <Helmet>
                <link href={withPrefix('https://fonts.googleapis.com/css2?family=Poiret+One&family=Viga&display=swap')} rel="stylesheet" />
                <link href={withPrefix('https://fonts.googleapis.com/css?family=Roboto')} rel="stylesheet" type="text/css" />
                <link href={withPrefix('https://fonts.googleapis.com/css?family=Montserrat:900')} rel="stylesheet"></link>
                <link href={withPrefix('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css')} rel="stylesheet" type="text/css" />
                <link href={withPrefix('https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css')} rel="stylesheet" type="text/css" />
            </Helmet>
            <Navigation/>
        </>          
    )
}

export default Header

