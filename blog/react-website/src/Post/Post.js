import React from 'react';
import './Post.css';
import { BlogsContext, IsAdminContext } from '../App/App.js'

function Post({ blogIndex }) {

  const { blogs, setBlogs } = React.useContext(BlogsContext);
  const { isAdmin, setIsAdmin } = React.useContext(IsAdminContext);

  const [title, setTitle] = React.useState(blogs[blogIndex].title);
  const [text, setText] = React.useState(blogs[blogIndex].text);
  const [author, setAuthor] = React.useState(blogs[blogIndex].author);
  const [date, setDate] = React.useState(blogs[blogIndex].date.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
  const [editNow, setEditNow] = React.useState(false);
  const [canEdit, setCanEdit] = React.useState(true);

  function handleEditButtonPress() {
    setEditNow(false);
    let blogsCopy = blogs;
    blogs[blogIndex] = {
      title: title,
      text: text,
      author: author,
      date: (new Date())
    }
    setBlogs(blogs);
    console.log(blogs[blogIndex])
  }

  function handleInput({ target }) {
    if (target.id === 'title')
      setTitle(target.value)
    else if (target.id === 'text')
      setText(target.value)
    else if (target.id === 'author')
      setAuthor(target.value)
    setDate(new Date().toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
  }

  function view() {
    return (
      <div className='container_bg'>
        <div className='container'>
          <div className='heading'>

            <h1> {title} </h1>
            <p>  {date}   </p>
          </div>
          <div className='image-container'>

          </div>

          <div className='article'>
            <p>  {text}   </p>
            <p id="author">  {author} </p>
          </div>
          {(canEdit)
            ? (<button onClick={() => { setEditNow(true) }}> Edit </button>)
            : (<div></div>)
          }
        </div>
      </div>
    )
  }
  //<img src={imageSrc}/>  .
  function edit() {
    return (
      <div className='container_bg'>
        <div className='container'>
          <div className='heading'>
            <input id="title" type="text" value={title} onChange={handleInput} />
            <p> {date} </p>
          </div>
          <div className='image-container'>

          </div>
          <div className='article'>
            <p id="note"> You can edit heading, text and author </p>
            <textarea id="text" type="text" value={text} onChange={handleInput} />
            <input id="author" type="text" value={author} onChange={handleInput} />
          </div>
          <button onClick={handleEditButtonPress}> View (confirm) </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      {(editNow && isAdmin) ? edit() : view()}
    </div>
  );
}

export default Post;
