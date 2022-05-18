import React from 'react';
import { Table } from 'react-bootstrap';

const Dash_appointmentListTable = ({myApmnt}) => {
    return (
        
        <Table striped bordered hover>
        <thead>
            <tr>
                <th> Name</th>
                <th>Time</th>
                <th>Date</th>
                <th>Service ID</th>
                <th>Phone No</th>
            </tr>
        </thead>
        <tbody>
            {
                (myApmnt.length==0)? 'No Appointment Available':''
            }

            {
                myApmnt.map(apmnt => (
                    <>

                        <tr>
                            <td>{apmnt.firstName}</td>
                            <td>{apmnt.time}</td>
                            <td>{apmnt.date}</td>
                            <td>{apmnt.serviceId}</td>
                            <td>{apmnt.phoneno}</td>
                        </tr>
                    </>
                )
                )
            }
        </tbody>
    </Table>
    );
};

export default Dash_appointmentListTable;