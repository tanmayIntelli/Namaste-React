import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

export default Header = () => {
  const [userStatus, setUserStatus] = useState(true);

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo" id="logo-img" />
      </div>
      <div className="Nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <button onClick={() => setUserStatus(!userStatus)}>
              {userStatus ? `Logout` : `Login`}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
