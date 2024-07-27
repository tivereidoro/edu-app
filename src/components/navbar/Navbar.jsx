import React from 'react';
import './navbar.css';
import logo from '../../assets/images/icon.png';

export default function Navbar() {
    return (
        <nav className='def_container'>
            <img className='home_logo' src={logo} alt="homepage_logo" />

            <ul>
                <li><a>Home</a></li>
                <li><a>Programs</a></li>
                <li><a>Campus</a></li>
                <li><a>About us</a></li>
                <li><button className='main_btn'><a>Contact us</a></button></li>
            </ul>
        </nav>
    )
}
