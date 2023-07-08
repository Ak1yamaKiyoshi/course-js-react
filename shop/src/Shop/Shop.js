import './Shop.css';
import jQuery from 'jquery';
import { useSelector, useDispatch } from 'react-redux'
import { push, remove } from '../redux/basketSlice';

export default function Shop() {
  const basket = useSelector((state) => state.basket.value);
  const dispatch = useDispatch();

  function handleItemClick(e) {
    let parent = jQuery(e.target).parent()
    let title = parent.children()[0].innerHTML
    let price = parent.children()[2].innerHTML
    dispatch(push({title:title, price:price}))
  }

  return (
    <div className='shop-container'>
        <div className='shop-product-grid'> 

        <div className='shop-product'><h2> Cheesecake </h2>  <p> Cool Cheesecake i guess, you definetly should take a bite </p><h3 onClick={handleItemClick}> 2$ </h3></div>
        <div className='shop-product'><h2> Cheese </h2>  <p> Cheese from cheescake </p><h3 onClick={handleItemClick}> 2$ </h3></div>
        <div className='shop-product'><h2> Pizza </h2>  <p> Tasty pizza </p><h3 onClick={handleItemClick}> 2$ </h3></div>
        <div className='shop-product'><h2> Hanburger </h2>  <p> Hamburger from mac! </p><h3 onClick={handleItemClick}> 2$ </h3></div>
        <div className='shop-product'><h2> Water </h2>  <p>Tap water  </p><h3 onClick={handleItemClick}> 2$ </h3></div>
        <div className='shop-product'><h2> Cola </h2>  <p> CocaCola </p><h3 onClick={handleItemClick}> 2$ </h3></div>
        <div className='shop-product'><h2> Pills </h2>  <p> head ache pills </p><h3 onClick={handleItemClick}> 2$ </h3></div>
        <div className='shop-product'><h2> Banana </h2>  <p> fresh banana  </p><h3 onClick={handleItemClick}> 2$ </h3></div>
        <div className='shop-product'><h2> Piece of cardboard </h2>  <p> box from MGS </p><h3 onClick={handleItemClick}> 2$ </h3></div>
        <div className='shop-product'><h2> Paper </h2>  <p> Paper for drawing </p><h3 onClick={handleItemClick}> 2$ </h3></div>
      
        </div>
    </div>
  );
}
