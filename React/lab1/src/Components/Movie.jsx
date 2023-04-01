import React from 'react';

const obj={backgroundColor:"#FFBF9B" , width:'70%' , margin:"15px auto", borderRadius: "10px", padding:"15px"};
const Movie = (props) => {
    const {name, duration} = props;
    return (
        <div style={obj}>
            <div>Name: {name}</div>
            <div>Duration: {duration}</div>

        </div>
    );
};

export default Movie;