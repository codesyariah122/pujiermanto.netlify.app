import React from 'react'
import Link from 'next/link'
import Navbar from './partials/navbar'
import Hero from './contents/hero'
import Head from 'next/head'

const Home = () => {
  return (
  <>
  <Head>
    <title>Home</title>
  </Head>
  
    <Navbar/>
    <section className="hero">
      <div className="container">
        <Hero/>       
      </div>
    </section>
  </>
  )
}

export default Home