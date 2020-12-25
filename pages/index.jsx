import React from 'react'
import Link from 'next/link'
import Navbar from './partials/navbar'
import Hero from './contents/hero'

const Home = () => {
  return (
  <>
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