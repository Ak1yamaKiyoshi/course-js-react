import React from 'react';
import './Schedule.css'
import Heading from './Heading';
import Scheduleelement from './Scheduleelement'
import Taskelement from './Taskelement';
import './Tasks.css'


function Tasks() {

    return (  
    <div className='tasks-container'>
        <Heading title="Tasks"/>
        <Taskelement number="1."/>
        <Taskelement number="2."/>
        <Taskelement number="3."/>
        <Heading title="Todo next"/>
        <Taskelement number="1."/>
        <Taskelement number="2."/>
        
    </div>
  );
}

export default Tasks;
