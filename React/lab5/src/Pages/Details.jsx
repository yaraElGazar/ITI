import React from 'react';
import { useParams } from 'react-router';
import { useContext } from 'react';
import Movie from '../Components/Movie';
import { MoviesContext } from '../Contexts/MoviesContextProvider';

const Details = () => {
    let {id} = useParams();

    const movies = useContext(MoviesContext);
    let movie = null;

    if (movies) {
        movie = movies.find((movie) => +movie.id === +id);

    }

      if(movie) return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Movie key={movie.id} {...movie} ></Movie>
        </div>
    )
    return (<div>Loading ...</div>)
};

export default Details;