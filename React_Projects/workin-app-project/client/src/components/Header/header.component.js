import React from 'react'

import './header.styles.css';
import header from '../../images/workin-header.png';

import Form from '../Form/form'

import wifiIcon from '../../images/workin-wifi-icon.png';
import seating from '../../images/seating-icon.png';
import electric from '../../images/electrical-icon.png';
import parking from '../../images/parking-icon.png';
import food from '../../images/food-icon.png';

const Header = () => {
    return(
        <>
        <div className="header-container">
        <h1 className="header">Where would you like to work today?</h1>
        <h2 className="header-description">Find and share your beta for working remote</h2>
        <img className="header-img" src={header} alt="header" />
        <Form />
        <div className="tags">
            <img src={wifiIcon} className="wifi" alt="wifi icon" />
            <img src={seating} 
            className="tag" alt="seats icon" />
            <img src={electric}
            className="tag"  alt="electric plug icon" />
            <img src={parking}
            className="tag" alt="parking icon"  />
            <img src={food} 
            className="tag"
            alt="food icon" />
        </div>
        </div>
        
        </>
    )
}

export default Header;