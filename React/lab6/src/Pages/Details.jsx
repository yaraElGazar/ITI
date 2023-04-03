import React from 'react';
import { useParams } from 'react-router';
import { fetchMovies } from '../Store/actions/movies-actions';
import Movie from '../Components/Movie';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Details = () => {
    let {id} = useParams();

    const movies = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch])  
      let movie = null;

    if (movies) {
        movie = movies[0].find((movie) => +movie.id === +id);

    }

      if(movie) return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Movie key={movie.id} {...movie} ></Movie>
        </div>
    )
    return (<div>Loading ...</div>)
};

export default Details;