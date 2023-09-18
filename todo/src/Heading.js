import React from 'react';
import './Heading.css'


function Heading({title}) {
  return (  
    <div className='heading-widget-container'> 
      <div className='heading-widget-text'> 
        <p> {title} </p> 
      </div>
    </div>
  );
}

export default Heading;
