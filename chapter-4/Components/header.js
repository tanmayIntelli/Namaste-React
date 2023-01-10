import React from "react"
import logo from '../img/logo.png';

export default Header = () => {return(
    <div className="header">
        <div className='logo'>
            <img src={logo} alt="Logo" id='logo-img' />
        </div>
        <div className="Nav-links">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Cart</a></li>
            </ul>
        </div>
    </div>
);
}