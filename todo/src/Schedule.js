import React from 'react';
import './Schedule.css'
import Heading from './Heading';
import Scheduleelement from './Scheduleelement'



function Schedule() {
    const [schedule, setSchedule] = React.useState([<Scheduleelement/>]);
    function handleButtonAddClick() {
        setSchedule([...schedule, <Scheduleelement/>]);
    }
    function handleButtonRemoveClick() {
        
        setSchedule(schedule.slice(0, -1));
    }

    return (  
    <div className='schedule-container'>
        <Heading title="Schedule"/>
        {schedule}
        <div className='schedule-button-section'>
        <button className='del-schedule-element' onClick={handleButtonRemoveClick}> × </button>
        <button className='add-schedule-element' onClick={handleButtonAddClick}> + </button>
        </div>
        
    </div>
  );
}

export default Schedule;
