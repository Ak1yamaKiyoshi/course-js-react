import { Link } from 'react-router-dom';
import './Navigation.css';
import React from 'react';

export default function Navigation() {
  // 'navigation-switched-block'

  const [s, setS] = React.useState(0);

  return (<>
    <div className='navigation-container'>
      <Link to="/basket" onClick={setS}> 
        {  (window.location.pathname) == '/basket'
          ? <h1 className='navigation-switched-block'> 🛒 Basket </h1>
          : <h1> 🛒 Basket </h1> }
        
      </Link>
      <Link to="/shop"> 
      {  (window.location.pathname) == '/shop'
          ? <h1 className='navigation-switched-block'>🛍️ Buy </h1>
          : <h1> 🛍️ Buy </h1> }
      </Link>
    </div>
    <div className='fake-container'> </div>
  </>);
}
