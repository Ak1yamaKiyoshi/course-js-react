import React from 'react';
import './App.css';
import Datewidget from './Datewidget';
import Heading from './Heading';
import Scheduleelement from './Scheduleelement'
import Taskelement from './Taskelement';
import Schedule from './Schedule';
import Tasks from './Tasks';
import Notes from './Notes';

function App() {
  return (  
    <div className='app-outer-container'> 

    <div className='app-container'>
      <Datewidget/>
      <div className='app-sides-container'> 
      <div className='left'>
        <Tasks/>
        <Notes title="Mind dump"/>
      </div>
      <div className='right'>
        <Schedule/>
        <Notes title="Notes"/>
      </div>
      </div>

    </div>
    </div>
  );
}

export default App;
