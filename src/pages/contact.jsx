import React from 'react'
import Layout from "../components/layouts/layout"
import Hero from './contact/hero'
import ContactForm from './contact/ContactForm'
import '../styles/hero.scss'

const Contact = () => {
   
    return (
    	<Layout title="Contact Page">
            <section className="hero">
                <div className="container">
                    <Hero id="hero"/>
                </div>
            </section>
            <section className="contact">
                <h5>Kirim pesan kamu disini, melalui kolom contact form dibawah ini</h5>
              <ContactForm/>
          </section>

            {/*<Map title="My Location" lat="-6.92170" lng="107.60643"/>*/}
        </Layout>
    )
}
export default Contact