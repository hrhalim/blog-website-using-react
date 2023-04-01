import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
             <div className='header-logo'>
                <h1>React JS</h1>
             </div>
             <div className='header-menu'>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/service">Service</a></li>
                    <li><a href="/blog">Blog</a></li> 
                </ul>
             </div>
        </div>
    );
};

export default Header;