import React from 'react';
import Post from '../Post/Post.js';
import { Link } from 'react-router-dom';
import { BlogsContext, IsAdminContext } from '../App/App.js'
import './Miniblog.css'


function Miniblog({ blogIndex }) {
    const { blogs, setBlogs } = React.useContext(BlogsContext);
    const { isAdmin, setIsAdmin } = React.useContext(IsAdminContext);
    // <Link to={}> </Link>
    return (
        <div>
            <div className='mini-blog-bg'>
                <div className='mini-blog-container'>
                    <div className='mini-blog-heading'>
                        <h1> {blogs[blogIndex].title} </h1>
                        <p>  {blogs[blogIndex].date.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} </p>
                    </div>

                    <div className='mini-blog-article'>
                        <p>  {blogs[blogIndex].text.substring(0, 100) + '...'}   </p>
                        <p>  {blogs[blogIndex].author} </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Miniblog;