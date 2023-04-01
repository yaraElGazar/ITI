import React from 'react';
import { useState } from 'react';
import Movie from './Movie';
import {v4 as uuid} from "uuid";


const Movies = () => {
    const [moviesArray] = useState([
        {id: uuid(), name: 'movie1', duration: '2 hours'},
        {id: uuid(), name: 'movie2', duration: '2 hours'},
        {id: uuid(), name: 'movie3', duration: '2 hours'},
        {id: uuid(), name: 'movie4', duration: '2 hours'},
        {id: uuid(), name: 'movie5', duration: '2 hours'},

    ])
    return (
        <div>
            {moviesArray.map((movie) => <Movie {...movie} key={movie.id}></Movie>)}
        </div>
    );
};

export default Movies;