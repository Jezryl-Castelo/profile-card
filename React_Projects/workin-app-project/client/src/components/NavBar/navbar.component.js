import React from 'react'

import './navbar.styles.css';
import logo from '../../images/workin-logo.png';

const NavBar = () => {
    return(
        <>
        <nav>
        <img className="logo" src={logo} alt="logo " />
        <ul>
            <li className="list">Find a workplace</li>
            <li className="list">Contribute</li>
            <li className="list">Sign In</li>
        </ul>
        </nav>
        </>
    )
}

export default NavBar;



