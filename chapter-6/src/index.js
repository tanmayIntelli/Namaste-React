import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/body";
import Footer from "./Components/footer";
import Header from "./Components/header"

const App = () => (
    <>
    <Header />
    <Body />
    <Footer />
    </>
);

const root = ReactDOM.createRoot(
    document.getElementById('root')
);
root.render(<App />)