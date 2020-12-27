import React from 'react'
import Head from 'next/head'
import Navbar from './navbar'

const Layout = (props) => {
	return (
		<>
		<Head>
			<title>{props.title}</title>
			 <link href='https://fonts.googleapis.com/css2?family=Poiret+One&family=Viga&display=swap' rel="stylesheet"/>
             
             <link href='https://fonts.googleapis.com/css?family=Roboto' rel="stylesheet" type="text/css"/>
             
             <link href='https://fonts.googleapis.com/css?family=Montserrat:900' rel="stylesheet"/>
             
             <link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' rel="stylesheet" type="text/css"/>
            
            <link href='https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css' rel="stylesheet" type="text/css"/>
		</Head>
			<Navbar/>
				{props.children}
		</>
	)
}

export default Layout