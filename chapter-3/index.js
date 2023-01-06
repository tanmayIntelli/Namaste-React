import React from "react";
import ReactDOM from "react-dom/client";
import HeaderDiv from "./header"; // Header from scratch 

// Using React.createElement

// const headerDiv = React.createElement("div",{className:"title"},[
//     React.createElement("h1",{
//         style:{backgroundColor:"yellow"}
//     },"Header item 1"),
//     React.createElement("h1",{
//         style:{backgroundColor:"blue"}
//     },"Header item 2"),
//     React.createElement("h1",{
//         style:{backgroundColor:"green"}
//     },"Header item 3")
// ]);


// UsingJSX

// const headerDiv =(<div className="title">
//     <h1 style={{backgroundColor:"yellow"}}>Header item 1</h1>
//     <h1 style={{backgroundColor:"green"}}>Header item 2</h1>
//     <h1 style={{backgroundColor:"blue"}}>Header item 3</h1>
// </div>);


// Using functional component

// const HeaderDiv = ()=>(
// <div className="title">
//     <h1 style={{backgroundColor:"yellow"}}>Header item 1</h1>
//     <h1 style={{backgroundColor:"red"}}>Header item 2</h1>
//     <h1 style={{backgroundColor:"blue"}}>Header item 3</h1>
// </div>);



const root = ReactDOM.createRoot(
    document.getElementById('root')
);
root.render(<HeaderDiv />)