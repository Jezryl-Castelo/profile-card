import React from 'react';
import search from '../../images/search-icon.svg';

import './form.styles.css';

const Form = () => {
    return(
        <>
        
        <form className="search" name="form" action="#">
            <input type="text" className="search-input" name="textLink" id="searchInput" placeholder="Nearby"></input>
            <div className="btn-container">
                <button className="search-btn"><img className="search-icon"src={search} alt="search"></img></button>
            </div>
        </form>

       
       
       </>
    )
}

export default Form;