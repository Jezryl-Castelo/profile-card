import React from 'react';

import './card.styles.css';
import cardImg from '../../images/coffeeshop.png'

const Card = () => {
    return(
        <>
        <div className="card-container">
        <img src={cardImg} alt="workplace" />
        <div className="card-details">
        <h4 className="workplace-title">Name of Workplace</h4>
        <p className="address">123 Main St Denver, CO</p>
        <p className="hours">6:00am - 2:00pm</p>
        </div>
         </div>
        </>
    )
}

export default Card;