import React from "react";
import { push, remove } from "../redux/blogReducer";
import './Navigation.css'
import { Link } from "react-router-dom";


export default function Navigation() {


    return (
    <div className="navigation-outer-container">
        <div className="navigation-inner-container"> 
            <Link to="/login">
               <img src={require("../logo.jpg")} /> 
 
            </Link>
            <Link to="/">
                <h1> Лавандове сяйво </h1>
            </Link>
        </div>
    </div>);
}