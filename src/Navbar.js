import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Navbar = ({ isLoggedIn, handleButtonClick }) => {
    return (
        <nav className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Devices">Devices</Link>
                <Link to="/Games">Games</Link>
                <Link to="/New">What's new</Link>
                <Link to="/Shop">Shop</Link>
                <Link to="/QA">QA</Link>
            </div>
            <h3>NEXGEN</h3>
            <Button className="ms-3 sign-in" onClick={handleButtonClick}>
                {isLoggedIn ? 'Log Out' : 'Sign In'}
            </Button>
        </nav>

    );
}
export default Navbar;