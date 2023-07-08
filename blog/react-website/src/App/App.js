import './App.css';
import Navigation from '../Navigation/Navigation.js';
import Post from '../Post/Post.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRoutes,
  Switch
} from "react-router-dom";
import Blog from '../Blog/Blog.js'
import Home from '../Home/Home.js'
import React from 'react';



export const BlogsContext = React.createContext(null);
export const IsAdminContext = React.createContext(null);


function App() {
  const [blogs, setBlogs] = React.useState([
    { date: (new Date()), title: 'SomeTitle', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non enim praesent elementum facilisis leo vel fringilla est. Ut tristique et egestas quis ipsum suspendisse. Lacus vestibulum sed arcu non odio euismod lacinia at quis. In cursus turpis massa tincidunt. Vel facilisis volutpat est velit egestas dui id ornare. Ullamcorper malesuada proin libero nunc consequat interdum. Purus semper eget duis at tellus at urna condimentum. Volutpat odio facilisis mauris sit amet massa vitae. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Tincidunt vitae semper quis lectus nulla at volutpat. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Viverra tellus in hac habitasse platea dictumst vestibulum. Nunc mi ipsum faucibus vitae. Enim nulla aliquet porttitor lacus luctus accumsan. Mauris ultrices eros in cursus. Facilisis sed odio morbi quis commodo odio aenean. Vivamus at augue eget arcu dictum.\nNibh nisl condimentum id venenatis a condimentum. Vehicula ipsum a arcu cursus vitae congue mauris. Massa sed elementum tempus egestas sed sed risus pretium quam. Morbi quis commodo odio aenean sed adipiscing diam. Mauris a diam maecenas sed enim. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Risus viverra adipiscing at in tellus integer feugiat. Velit euismod in pellentesque massa placerat duis. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Nam at lectus urna duis convallis convallis. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Adipiscing bibendum est ultricies integer quis auctor elit. Facilisi nullam vehicula ipsum a arcu.\nLeo in vitae turpis massa sed elementum tempus egestas. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Interdum posuere lorem ipsum dolor sit. Et sollicitudin ac orci phasellus egestas. Morbi non arcu risus quis varius quam quisque. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Sit amet aliquam id diam maecenas ultricies mi eget mauris. Sed id semper risus in hendrerit gravida rutrum quisque non. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Sit amet aliquam id diam. Pulvinar neque laoreet suspendisse interdum consectetur. Vel elit scelerisque mauris pellentesque pulvinar. Praesent semper feugiat nibh sed pulvinar proin. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim.', author: 'cool' },
    { date: (new Date()), title: 'SomeTitle', text: '1', author: '2' },
    { date: (new Date()), title: 'SomeTitle', text: '1', author: '2' },
    { date: (new Date()), title: 'SomeTitle', text: '1', author: '2' }
  ]);
  const [isAdmin, setIsAdmin] = React.useState(true);
  function getPathFromBlogElement(e) {
    console.log(`/home${`/blog${blogs.indexOf(e)}`}`);
    return `/blog${blogs.indexOf(e)}`;
  }

  return (
    <Routes>


      <Route path='/blog' element={
        <BlogsContext.Provider value={{ blogs, setBlogs }}>
          <IsAdminContext.Provider value={{ isAdmin, setIsAdmin }}>
            <Blog blogIndex={1}></Blog>
          </IsAdminContext.Provider>
        </BlogsContext.Provider>
      } />

      <Route path='/nav' element={
        <BlogsContext.Provider value={{ blogs, setBlogs }}>
          <IsAdminContext.Provider value={{ isAdmin, setIsAdmin }}>
            <Navigation></Navigation>
          </IsAdminContext.Provider>
        </BlogsContext.Provider>
      } />

      <Route path='/home/*' element={

        <BlogsContext.Provider value={{ blogs, setBlogs }}>
          <IsAdminContext.Provider value={{ isAdmin, setIsAdmin }}>
            <Home></Home>
          </IsAdminContext.Provider>
        </BlogsContext.Provider>
      } />



    </Routes>
  );
}

export default App;

