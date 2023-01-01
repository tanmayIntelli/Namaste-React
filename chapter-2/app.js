import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement("h1",{},"Namaste React");
const heading2 = React.createElement("h1",{},"Namaste React 2");
const childDiv = React.createElement("div",{},[heading, heading2]);
const parentDiv = React.createElement("div",{},childDiv);
const root = ReactDOM.createRoot(
    document.getElementById('root')
);
root.render(parentDiv)