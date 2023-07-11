import React from "react";
import { push, remove, update } from "../redux/blogReducer";
import { add, removeRoute, updateRoute, updateAllRoutes } from "../redux/blogRoutesReducer";


import { login, unlog, switchlogin } from "../redux/adminReducer";
import './Blog.css'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import jquery from "jquery";
import { useNavigate } from "react-router-dom";


export default function Blog({index}) {
    const blogs = useSelector((state) => state.blogs.blogs);
    const isLogged = useSelector((state) => state.admins.isAdminLogged);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const blogRoutes=useSelector((state) => state.blogRoutes);
    
    const [title, setTitle] =     React.useState(blogs[index].title);
    const [author, setAuthor] =   React.useState(blogs[index].author);
    const [content, setContent] = React.useState(blogs[index].content);
    const [date, setDate] =       React.useState(blogs[index].date);
    const [editing, setEditing] = React.useState(false);

    function handleInput(e) {
        let id = e.target.id.trim(); 
        let val = jquery(e.target).val();
        if (id == "blog-content")
          setContent(val);
        else if (id == "blog-title")
          setTitle(val);
        else if (id == "blog-author")
          setAuthor(val);
    }

    function confirmBlog() {
        setDate(new Date().toLocaleDateString("en-EN", { day: "numeric", month:'long'}))
        dispatch(update({
            index: index,
            new: {
                title: title,
                content: content,
                author: author,
                date:date
        }}));
    }


    function view() {
        return (<div className="blog-outer-container">
        <div className="blog-inner-container">
            <div className="blog-inner-view">
                <div className="blog-view-header-container">
                    <div className="blog-header-"> 
                        <h1> {title} </h1>
                        <h2> by {author} </h2>
                        <h3> {date} </h3>
                    </div>
                    <div className="blog-view-article-container">
                    {(isLogged)
                        ? (<button onClick={() => { 
                            setEditing(true) 
                        }}> Edit 
                        </button>)
                    : (<></>)}
                        <p id="blog-content"> {content} </p>
                    </div>
                </div>
            </div>
        </div></div>)
    }

    function edit() {
        return (<div className="blog-outer-container">
        <div className="blog-inner-container">
            <div className="blog-inner-view">
                <div className="blog-view-header-container">
                    <div className="blog-header-"> 
                    <input onChange={handleInput}  id="blog-title" type="text" value={title} />
                    <input onChange={handleInput}  id="blog-author" value={author} /> <h2 />
                    <h3> {date} </h3>
                    </div>
                    <div className="blog-view-article-container">
                    <div className="blog-buttons"> 
                                <button onClick={() => { 
                                    setEditing(false);
                                    confirmBlog();
                                }}> Edit </button>
                                                <button onClick={() => {
                                let blogsNew = [...blogs];
                                blogsNew.splice(index.payload, 1);
                                dispatch(remove(index))
                                dispatch( updateAllRoutes(blogsNew) );
                                navigate("/home");
                                
                            }}
                            > X </button>   
                    </div>
                        <textarea id="blog-content" onChange={handleInput} value={content} />
                    </div>
                </div>
            </div>
        </div></div>)
    }
    /*
    (<div className="blog-container">
            <div className="blog-inner-edit">
                <div className="blog-edit-header-container">
                    <input onChange={handleInput}  id="blog-title" type="text" value={title} />
                    <input onChange={handleInput}  id="blog-author" value={author} /> <h2 />
                    <h3> {date} </h3>
                <div />
                <div className="blog-edit-article">
                    <input onChange={handleInput} id="blog-content" value={content}/> 
                </div>
                <div/>
                <button onClick={() => { 
                        setEditing(false);
                        confirmBlog();
                }}> Edit </button>
                <button onClick={() => {
                    let blogsNew = [...blogs];
                    blogsNew.splice(index.payload, 1);
                    dispatch(remove(index))
                    dispatch( updateAllRoutes(blogsNew) );
                    navigate("/home");
                    
                }}
                > Delete blog </button>    
                
                </div>
            </div>
        </div>)
    */
    return (<>
        {(!editing) ? view() : edit()}
    </>
    );
}
