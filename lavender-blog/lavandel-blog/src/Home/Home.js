import React from "react";

import './Home.css'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Route, Routes,  useSearchParams } from "react-router-dom";
import Blog from "../Blog/Blog";
import Miniblog from "../Miniblog/Miniblog";
import { useNavigate } from "react-router-dom";

import { add, removeRoute, updateRoute, updateAllRoutes } from "../redux/blogRoutesReducer";
import { push, remove } from "../redux/blogReducer";

export default function Home() {
    const blogs =    useSelector((state) => state.blogs.blogs);
    const isLogged = useSelector((state) => state.admins.isAdminLogged);
    const blogRoutes=useSelector((state) => state.blogRoutes);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function createBlog() {
        dispatch(push( {
            title: "New Title",
            content: "New Content",
            author: "New Author",
            date: "New Date"
        }))
        dispatch(updateAllRoutes(blogs))
        dispatch(add());
    }


    return (
        <div className="home-outer-container">
            { (isLogged) ? <h1> Logged as admin </h1> : <></>}
            <h1> Home </h1>
            <div className="menu-blogs-container">
            {blogs.map(e => (
                <Miniblog index={blogs.indexOf(e)}/>
            ))}
            { (isLogged) ? <button onClick={createBlog}><h1> Add blog </h1> </button>: <></>}
            </div> 
        </div>
    );
}
