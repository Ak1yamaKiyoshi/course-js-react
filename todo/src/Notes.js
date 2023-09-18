import React from 'react';
import Datewidget from './Datewidget';
import Heading from './Heading';
import Scheduleelement from './Scheduleelement'
import Taskelement from './Taskelement';
import Schedule from './Schedule';
import Tasks from './Tasks';
import './Notes.css'



function Notes({title}) {

    return (  
    <div className='notes-container'>
        <Heading title={title}/>
        <textarea cols="10" />
    </div>
  );
}

export default Notes;
