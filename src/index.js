import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"

// console.log(React);
// console.log(ReactDOM);

let root = ReactDOM.createRoot(document.getElementById("root"));

// root.render("Hiii"); //? String

// root.render(<h1> Hii, I am JSX code </h1>); //? JSX

root.render( <App /> ); //? Component