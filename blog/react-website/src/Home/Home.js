import React from 'react';
import Post from '../Post/Post.js';
import { Rotate as Hamburger } from 'hamburger-react'
import { posts } from '../App/App.js'
import Navigation from '../Navigation/Navigation.js';
import './Home.css'
import Blogpreview from '../Blogpreview/Blogpreview.js';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRoutes,
} from "react-router-dom";


function Home() {
    const [isOpen, setOpen] = React.useState(false);

    return (
        <div>
            <Navigation onClick={() => {console.log('a')}}></Navigation>
            <div className="home-container">
                {(window.location.pathname == '/home')
                ? <Blogpreview></Blogpreview>
                : <> </>}
            </div>
        </div>


    )
}

export default Home;
