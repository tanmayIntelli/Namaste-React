import React, { useState } from "react";
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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Cart</a>
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
