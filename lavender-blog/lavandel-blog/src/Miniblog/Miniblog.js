import React from "react";
import { push, remove, update } from "../redux/blogReducer";
import { login, unlog, switchlogin } from "../redux/adminReducer";
import './Miniblog.css'
import { Link, Route, Router, Routes } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import jquery from "jquery";

import Blog from "../Blog/Blog";



export default function Miniblog({index}) {
    const blogs = useSelector((state) => state.blogs.blogs);
    const dispatch = useDispatch();
    
    const [title, setTitle] =     React.useState(blogs[index].title);
    const [author, setAuthor] =   React.useState(blogs[index].author);
    const [content, setContent] = React.useState(blogs[index].content);
    const [date, setDate] =       React.useState(blogs[index].date);
    const [editing, setEditing] = React.useState(false);
    let query = `/home/blog_${index}`

    return (<div className="blog-container">

      <div className="blog-inner-view">
        <div className="blog-view-header-container">
          <h1> {title}     </h1>
          <h2> by {author} </h2>
          <h3> {date}      </h3>
            <div />
            <div className="blog-view-article-container">
              <p id="blog-content"> {content} </p>
            </div>
            { <Link to={query}> 
              <h1> View </h1>
            </Link> }
            </div>
        </div>
    </div>)
    

   
}
