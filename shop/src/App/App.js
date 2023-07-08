import './App.css';
import Navigation from '../Navigation/Navigation.js';
import Shop from '../Shop/Shop';
import { Link, Route, Routes } from 'react-router-dom';
import Basket from '../Basket/Basket';


function App() {
  return (<>
    <div className='home-container'>
      <Link to="./shop"> 
        <button> Shop </button>
      </Link>
      <Link to="./basket"> 
        <button> Basket </button>
      </Link>
    </div>

  </>);
}

export default App;
