import React from "react";
import { push, remove } from "../redux/blogReducer";
import './Navigation.css'
import { Link } from "react-router-dom";


export default function Navigation() {


    return (
    <div className="navigation-outer-container">
        <div className="navigation-inner-container"> 
            <Link to="/">
                <h1>~ Lavender blog ~</h1>
            </Link>
            <Link to="/login">
                <h2> Login </h2>
            </Link>
        </div>
    </div>);
}