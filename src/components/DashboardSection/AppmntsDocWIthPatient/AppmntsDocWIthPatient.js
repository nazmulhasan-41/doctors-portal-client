import React from 'react';

const AppmntsDocWIthPatient = ({apmnt}) => {
    console.log(apmnt)
    return (
        <>
            {apmnt.firstName}" "{apmnt.date} 
            
        </>
    );
};

export default AppmntsDocWIthPatient;