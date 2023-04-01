import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

const Input = ({getData}) => {
    const [data, setData] = useState("");

    const handleChange = (event) => {
        setData(event.target.value);
    }

    const handleClick = () => {
        getData(data);
    }

    return (
        <div>
            <div style={{width: '500px', margin: '40px auto'}}>
                <TextField id="outlined-basic" label="Student Name" variant="outlined" style={{width: '100%'}} defaultValue = {data} onChange={handleChange}/>
            </div>
            <Button variant="contained" color="secondary" onClick = {handleClick}>
                Add
            </Button>
        </div>
    );
};

export default Input;