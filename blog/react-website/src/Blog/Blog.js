import React from 'react';
import Navigation from '../Navigation/Navigation.js';
import Post from '../Post/Post.js';


function Blog({ blogIndex }) {
    return (
        <div>
            <Navigation />
            <Post blogIndex={blogIndex} />
        </div>
    );
}
export default Blog;