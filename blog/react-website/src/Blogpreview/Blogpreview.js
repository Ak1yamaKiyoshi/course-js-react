import React from 'react';
import Navigation from '../Navigation/Navigation.js';
import Post from '../Post/Post.js';
import Blog from '../Blog/Blog.js';
import Miniblog from '../Miniblog/Miniblog.js';
import { BlogsContext, IsAdminContext } from '../App/App.js'
import './Blogpreview.css'


import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRoutes,
} from "react-router-dom";



function useForceUpdate() {
    const [value, setValue] = React.useState(0); // integer state
    return () => setValue(value => value + 1); // update state to force render
    // A function that increment 👆🏻 the previous state like here 
    // is better than directly setting `setValue(value + 1)`
}

function Blogpreview({ blogIndex }) {
    const { blogs, setBlogs } = React.useContext(BlogsContext);
    const { isAdmin, setIsAdmin } = React.useContext(IsAdminContext);
    function getIndexInBlog(e) { return }
    function getPathFromBlogElement(e) { return `/blog${blogs.indexOf(e)}`; }

    const forceUpdate = useForceUpdate();

    return (
        <div>

            {(window.location.pathname == '/home')
                ? (<div className='blog-preview-container'>
                    {blogs.map(e => (
                        <Link onClick={forceUpdate} to={`/home${getPathFromBlogElement(e)}`}>
                            <Miniblog blogIndex={blogs.indexOf(e)} />
                        </Link>))
                    } </div>)
                : <> </>}

            <Routes> {
                blogs.map(e => (
                    <Route
                        path={`${getPathFromBlogElement(e)}`}
                        element={<Post blogIndex={blogs.indexOf(e)} />}
                    />))
            } </Routes>
        </div>
    );
}
export default Blogpreview;