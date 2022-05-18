import React from 'react';

const AppmntsDocWIthPatient = ({apmnt}) => {
    
    return (
        <>
            <td>{apmnt.firstName}</td>
            <td>{apmnt.phoneno}</td> 
            <td>{apmnt.date}</td> 
            <td>{apmnt.time}</td> 
            <td>{apmnt.age}</td> 
            
        </>
    );
};

export default AppmntsDocWIthPatient;