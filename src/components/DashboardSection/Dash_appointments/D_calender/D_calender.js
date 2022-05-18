import React from 'react';
import Calendar from 'react-calendar';

const D_calender = ({  selectDateHandler }) => {
    return (
        
            <Calendar onChange={selectDateHandler}  />
       
    );
};
export default D_calender;