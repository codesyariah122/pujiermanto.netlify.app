import React from 'react'
import { withPrefix, Link } from 'gatsby' 
import { Helmet } from 'react-helmet'
import PortfolioContent from './modul/portfolioContent'


const PortfolioPage = () => {
    return (
        <div>
             <PortfolioContent/>
            <Helmet>
                <link href={withPrefix('https://www.w3schools.com/w3css/4/w3.css')} rel="stylesheet" type="text/css" />
                <link rel='stylesheet' href={withPrefix('https://fonts.googleapis.com/css?family=Roboto')} />
                <link rel="stylesheet" href={withPrefix('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css')} />
            </Helmet>
        </div>
        
    )
}

export default PortfolioPage