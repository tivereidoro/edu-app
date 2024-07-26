import React from 'react';
import './navbar.css';
import logo from '../../../public/icon.png';

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="homepage_logo" />

            <ul>
                <li>Home</li>
                <li>Programs</li>
                <li>Campus</li>
                <li>About us</li>
                <li>Contact us</li>
            </ul>
        </nav>
    )
}
