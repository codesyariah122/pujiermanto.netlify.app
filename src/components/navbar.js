import React from 'react'
import { Link } from 'gatsby' 

const Navigation = () => {
    return (
        <div class="w3-top">
            <div class="w3-bar" id="myNavbar">
                <a class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="javascript:void(0);" onclick="toggleFunction()" title="Toggle Navigation Menu">
                <i class="fa fa-bars"></i>
                </a>
                <a href="#home" class="w3-bar-item w3-button">HOME</a>
                <a href="#about" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-user"></i> ABOUT</a>
                <a href="#portfolio" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-th"></i> PORTFOLIO</a>
                <a href="#contact" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-envelope"></i> CONTACT</a>
                <a href="#" class="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red">
                <i class="fa fa-search"></i>
                </a>
            </div>

            <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
                <a href="#about" class="w3-bar-item w3-button" onclick="toggleFunction()">ABOUT</a>
                <a href="#portfolio" class="w3-bar-item w3-button" onclick="toggleFunction()">PORTFOLIO</a>
                <a href="#contact" class="w3-bar-item w3-button" onclick="toggleFunction()">CONTACT</a>
                <a href="#" class="w3-bar-item w3-button">SEARCH</a>
            </div>
            </div>
    )
}

export default Navigation