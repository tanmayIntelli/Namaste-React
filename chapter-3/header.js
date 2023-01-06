import React from "react";
import logo from "./img/icon-react.jpg";
import userIcon from "./img/user.png"
import Search from "./searchBar";

const HeaderDiv = ()=>(
<div className="navbar">
   <div className="logo">
    <img className="logo-img" src={logo} />
   </div>
   <div className="search-bar">
    <Search />
   </div>
   <div className="user-icon">
   <img className="user-img" src={userIcon} />
   </div>
</div>);

export default HeaderDiv;