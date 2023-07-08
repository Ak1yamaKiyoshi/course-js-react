import './Basket.css';
import { useSelector, useDispatch } from 'react-redux'
import { push, remove } from '../redux/basketSlice';
import jQuery from 'jquery';

export default function Basket() {
  const basket = useSelector((state) => state.basket.value);
  const dispatch = useDispatch();

  function handleClick (e) {
    let parent = jQuery(e.target)
    if ( parent.prop("tagName") == "H2" || parent.prop("tagName") == "P")
      parent = parent.parent();

    let title = parent.children()[0].textContent.trim();
    let price = parent.children()[1].textContent.trim();
    let index = -1;
    for (let i = 0; i < 100; i++) 
      if (basket[i] && basket[i].payload.title.trim() == title) 
        index = i;    
    
    
    if ( index != -1 ) 
      dispatch(remove(index));
  }

  return (<>
    <div className='basket-container'>
      <div className='basket-grid'> 
    <h1> Basket </h1>
        {basket.map(el => (<div className='basket-element' onClick={handleClick}> 
          <h2> { el.payload.title } </h2>
          <p>  { el.payload.price } </p>
        </div> ))}
      </div>

    </div>
  </>
  );
}
