import React from 'react'
import Navigation from './../components/navbar/navbar'
import Header from './about/header'
import ContentSatu from './about/content_satu'

const AboutPage = () => {
    const style = {
        marginTop: '-5rem'
    }
    return (
    <>
    <Navigation/>
        <Header/>
        <ContentSatu/>
    </>
    )
}

export default AboutPage