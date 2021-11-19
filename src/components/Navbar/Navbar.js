import React from 'react';
import './Navbar.css';
import SearchBar from '../Searchbar/Searchbar';
import { } from 'react-icons/io5';

const Navbar = () => {
    return (
        <nav className="Navbar">
            <img src="https://github.com/Istiackrohan/10ms-contents/blob/main/public/images/logo.png?raw=true" alt="Logo"></img>
            <div className="search"><SearchBar /></div>
        </nav>
    );
};

export default Navbar;