import React from 'react'
import Link from 'next/link'
import Hero from './contents/home/hero'
import Layout from './partials/layout'

const Home = () => {
  return (
  <>
    <Layout title="Home">
      <section className="hero">
        <div className="container">
          <Hero/>       
        </div>
      </section>
    </Layout>
  </>
  )
}

export default Home