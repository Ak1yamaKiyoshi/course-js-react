import React from 'react';
import './App.css';
import './Taskelement.css'

function Taskelement ({number}) {
    return (
        <div className='task-element-container'> 
            <p> {number}</p>
            <input type='text' className='.task-element-text'/> 
        </div>
    )
}

export default Taskelement