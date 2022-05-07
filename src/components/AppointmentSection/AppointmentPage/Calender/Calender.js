import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './Calender.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import bg_image from '../../../../images/appointment-bg.png';


const Calender = ({selectDate}) => {
    const [value, onChange] = useState(new Date());
    const clickDayHandler=(date)=>{
        selectDate(date);
    }

    return (
        
        <div>
            
            <Row className='row_cldr'>
                <Col xs={12} md={6} className='col_cldr' >
                    <div className='title_cldr'>Appointment</div>
                    <div className='main_cldr'>
                        <Calendar 
                        
                        value={value} 
                        onChange={clickDayHandler}
                        />

                    </div>


                </Col>
                <Col xs={12} md={6} className='cldr_right align-items-center'>
                    <div className='div_image'>
                        <img src={bg_image} className='cldr_right_img'></img>

                    </div>
                </Col>
            </Row>

        </div>
    );
};

export default Calender;