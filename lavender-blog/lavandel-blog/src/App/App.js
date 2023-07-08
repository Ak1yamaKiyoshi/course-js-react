import './App.css';

import Login from '../Login/Login';
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import About from '../About/about';
import Contact from '../Contact/Contact';

//


function App() {
  const routes = useSelector((state) => state.blogRoutes.routes);
  let appRouter = createBrowserRouter([
    {path:"/login",element:<><Navigation/> <Login/></> }, 
    {path:"/home/",element: <><Navigation/><Home/></> },
    {path:"/",element: <><Navigation/><Home/></> }, 
    {path:"/about", element: <><Navigation/><About/></>},
    {path:"/about/contact", element: <><Navigation/><Contact/></>},
    ...routes
  ]);  
  return (
    <RouterProvider router={appRouter} /> 
  );
}

export default App;
