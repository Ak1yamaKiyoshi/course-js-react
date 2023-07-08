import React from 'react';
import "./Navigation.css"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRoutes,
} from "react-router-dom";
import { Rotate as Hamburger } from 'hamburger-react'

function useForceUpdate() {
    const [value, setValue] = React.useState(0); // integer state
    return () => setValue(value => value + 1); // update state to force render
    // A function that increment 👆🏻 the previous state like here 
    // is better than directly setting `setValue(value + 1)`
}

function Navigation() {
    const [isOpen, setOpen] = React.useState(false);
    const forceUpdate = useForceUpdate();

    return (
        <div className='nav-container'>
            <div className='hamburgerMenu'>
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
            {(isOpen)
                ? (
                    <div className='nav-menu'>
                        <Link to='../nav'> Nav</Link>
                        <Link onClick={forceUpdate} to='../home'> Home</Link>
                        <Link to='../blog'> Blog</Link>
                    </div>)
                : (<></>)}
        </div>
    )
    //<a href='/home'> Home </a>
    //<a href='/blog'> Blog </a>
    //<a href='/nav'> Nav </a>
}

export default Navigation;
