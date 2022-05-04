import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';
import ft_bg from '../../images/footer-bg.png';


const Footer = () => {
    return (
        <div style={{ }}>
            <Row style={{disply:'flex', justifyContent:'center', paddingTop:'80px', paddingBottom:'80px',backgroundImage:`url(${ft_bg})`}}>
                <Col  className='ft_column' style={{margin:'10px'}}  xs={12} md={3}>

                    <h4 className='ft_title'>services</h4>
                    <h6 className='ft_subtitle'> check up</h6>
                    <h6 className='ft_subtitle'> check up</h6>
                    <h6 className='ft_subtitle'> check up</h6>
                    <h6 className='ft_subtitle'> check up</h6>
                    
                </Col>
                <Col className='ft_column' style={{margin:'10px'}} xs={12} md={3}>
                    <h4 className='ft_title'>oral Health</h4>
                    <h6 className='ft_subtitle'> check up</h6>
                    <h6 className='ft_subtitle'> check up</h6>
                    <h6 className='ft_subtitle'> check up</h6>
                    <h6 className='ft_subtitle'> check up</h6>
                </Col>
                <Col className='ft_column' style={{margin:'10px'}} xs={12} md={3}>
                    <h4 className='ft_title'>Address</h4>
                    <h6 className='ft_subtitle'> check up</h6>
                    <h6 className='ft_subtitle'> check up</h6>
                    <h6 className='ft_subtitle'> check up</h6>
                    <h6 className='ft_subtitle'> check up</h6>
                </Col>
            </Row>


        </div>
        
            
        
    );
};

export default Footer;