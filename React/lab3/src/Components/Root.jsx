import React, { useState } from 'react';
import Input from './Input';
import CustomizedTables from './Table';

const Root = () => {
    const [students, setStudents] = useState([]);

    const getData = (data) => {
        setStudents([...students, data])
    }

    return (
        <div>
            <Input getData={getData}></Input>
            {students.length !== 0? <CustomizedTables students = {students}></CustomizedTables> : <div style={{margin: "40px"}}>Waiting for data ...</div>}
        </div>
    );
};

export default Root;