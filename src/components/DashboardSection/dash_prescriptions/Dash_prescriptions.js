import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import AddPrescript from '../AddPrescript/AddPrescript';

const Dash_prescriptions = () => {

    // const [myPrescripts,setMyPrescripts]=useState([]);
    var email = localStorage.getItem('email');
    var doc_email = localStorage.getItem('doc_email');

    const [apmnts, setApmnts] = useState([]);
    const [data, changeData] = useState(0);

    useEffect(() => {
        var obj = { email: email };
        if (doc_email) {
            obj = { docEmail: doc_email };
        }
        var stringifyObj = JSON.stringify(obj);

        fetch(`http://localhost:5000/getAppointments/${stringifyObj}`)
            .then(data => data.json())
            .then(res => setApmnts(res))

    }, [data]);

    return (
        <div>
            <h1>All apoointments to prescribe</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th> Service Id</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Doctor</th>
                        <th>Report Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (apmnts.length == 0) ? 'No Appointment Available' : ''
                    }

                    {
                        apmnts.map(apmnt =>
                            <tr>
                            <AddPrescript
                                apmnt={apmnt}
                                setPrescriptions={setApmnts}
                                data={data}
                                changeData={changeData}
                            ></AddPrescript>
                        </tr>
                        )
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default Dash_prescriptions;