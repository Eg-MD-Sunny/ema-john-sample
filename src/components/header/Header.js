import React from 'react';
import logo from '../../../src/images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className="header">
            <img src={logo} alt=""></img>
            <div>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About Us</a>
            </div>
        </nav>
    );
};

export default Header;