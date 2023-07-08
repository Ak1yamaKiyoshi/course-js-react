import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import store from './redux/store';

import { Provider } from 'react-redux';
import { Route, 
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider, 
} from 'react-router-dom';
import App from './App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

