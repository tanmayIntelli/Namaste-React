import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./img/icon-react.jpg";

const Search = ()=>(
<div className="search">
    <input type="text" placeholder="Type to search..." id="search-input"/><button id="search-btn">Find</button>
</div>);


export default Search;