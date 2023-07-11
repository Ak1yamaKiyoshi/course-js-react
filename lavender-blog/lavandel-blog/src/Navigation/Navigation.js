import React from "react";
import { push, remove } from "../redux/blogReducer";
import './Navigation.css'
import { Link } from "react-router-dom";


export default function Navigation() {
    const [visibleLoggin, setVisibleLogin] = React.useState(false);

    // <img src={require("../logo.jpg")} /> 
    return (
    <div className="navigation-outer-container">
        <div className="navigation-inner-container"> 
            <Link to="/">
                <h1> Лавандове сяйво </h1>
            </Link>
                
        </div>
        { (window.location.pathname != "/login") 
        ? (<> 
            { (!visibleLoggin) 
            ? <Link to="/login" > <h1 id="login-button"> вхід </h1> </Link>
            : <></>}
        </>)  
        : <></>}
    </div>);
}