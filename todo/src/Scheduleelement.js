import React from 'react';
import './App.css';
import './Scheduleelement.css'

function Scheduleelement () {
    return (
        <div className='schedule-element-container'> 
            <input type="time" className='schedule-element-time'/>
            <input type='text' className='schedule-element-text'/> 
        </div>
    )
}

export default Scheduleelement