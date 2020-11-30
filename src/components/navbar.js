import React from 'react'
import { Link } from 'gatsby'
import Navbar from './module/layout.module.scss'

const profileData = {
    'home': '/',
    'portfolio': '/portfolio',
    'contact': '/contact',
    'blog': '/blog',
};

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

const Navigation = () => {
    return (
        <div className={Navbar.navbar} id="navbar">
            <Link to={profileData.home}>Home</Link>
            <Link to={profileData.portfolio} target="_blank">Portfolio</Link>
            <Link to={profileData.contact} target="_blank">Contact</Link>
        </div>
    )
}

export default Navigation

