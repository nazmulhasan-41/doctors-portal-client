import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';
import ft_bg from '../../images/footer-bg.png';


const Footer = () => {
    return (
        <div style={{}}>
            <Row style={{ disply: 'flex', justifyContent: 'center', paddingTop: '80px', paddingBottom: '80px', backgroundImage: `url(${ft_bg})` }}>
                <Col className='ft_column' style={{ margin: '10px' }} xs={12} md={3}>


                    <h4 className='ft_title'>services</h4>
                    <h6 className='ft_subtitle'> Mental health care</h6>
                    <h6 className='ft_subtitle'>Dental care
                    </h6>
                    <h6 className='ft_subtitle'> Laboratory and diagnostic care
                    </h6>
                    <h6 className='ft_subtitle'> Substance abuse treatment
                    </h6>

                </Col>
                <Col className='ft_column' style={{ margin: '10px' }} xs={12} md={3}>
                    <h4 className='ft_title'>Sponsors</h4>


                    <h6 className='ft_subtitle'> Powered by: MIS</h6>
                    <h6 className='ft_subtitle'>  Supported by: UNICEF</h6>

                </Col>
                <Col className='ft_column' style={{ margin: '10px' }} xs={12} md={3}>

                    <h4 className='ft_title'>Address</h4>
                    <h6 className='ft_subtitle'>  info@prothomalo.com</h6>
                    <h6 className='ft_subtitle'> Print Ad Sales: ad@prothomalo.com</h6>
                    <h6 className='ft_subtitle'> Digital Ad Sales: adsales@prothomalo.com</h6>

                </Col>
            </Row>


        </div>



    );
};

export default Footer;