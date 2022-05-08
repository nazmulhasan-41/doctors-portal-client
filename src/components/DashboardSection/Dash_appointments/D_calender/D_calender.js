import React from 'react';
import Calendar from 'react-calendar';

const D_calender = ({  selectDateHandler }) => {
    return (
        <div>
            <Calendar onChange={selectDateHandler}  />
        </div>
    );
};
export default D_calender;