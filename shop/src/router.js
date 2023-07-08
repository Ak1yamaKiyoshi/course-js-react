import Basket from './Basket/Basket';
import Shop from './Shop/Shop';
import Navigation from './Navigation/Navigation';
import App from './App/App';

import { Route, 
    BrowserRouter as Router,
    createBrowserRouter,
    RouterProvider, 
} from 'react-router-dom';

export const router = createBrowserRouter([
    {
      path:"/",
      element: <>
      <Navigation/><Shop/>
      </>
    },
    {
      path:"/basket",
      element: <>
      <Navigation/><Basket/>
      </>
    },
    {
      path:"/shop",
      element: <>
      <Navigation/><Shop/>
      </>
    }
  ]);

  
