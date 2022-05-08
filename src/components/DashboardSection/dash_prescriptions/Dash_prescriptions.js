import React, { useEffect, useState } from 'react';
import AddPrescript from '../AddPrescript/AddPrescript';

const Dash_prescriptions = () => {

    // const [myPrescripts,setMyPrescripts]=useState([]);
    var email = localStorage.getItem('email');
    var doc_email = localStorage.getItem('doc_email');

    const [apmnts, setApmnts] = useState([]);
    const [data, changeData]=useState(0);

    useEffect(() => {
        var obj = { email: email };
        if (doc_email) {
            obj = {};
        }
        var stringifyObj = JSON.stringify(obj);

        fetch(`http://localhost:5000/getAppointments/${stringifyObj}`)
            .then(data => data.json())
            .then(res => setApmnts(res))

    }, [data]);

    return (
        <div>
            <h1>All apoointments to prescribe</h1>
            {
                apmnts.map(apmnt =>

                    <AddPrescript
                        apmnt={apmnt}
                        setPrescriptions={setApmnts}
                        data={data}
                        changeData={changeData}
                    ></AddPrescript>

                )
            }
        </div>
    );
};

export default Dash_prescriptions;