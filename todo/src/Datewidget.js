import React from 'react';
import './Datewidget.css'


function Datewidget() {
  return (  
    <div className='date-widget-container'> 
      <div className='date-widget-date'> 
        <p> Date: </p> 
        <div className='date-widget-current-date'>  
          <p> {new Date().toLocaleDateString("en-EN", { weekday: 'long', day: "numeric", month:'long', year: 'numeric'})} </p>
        </div>
      </div>
    </div>
  );
}

export default Datewidget;
