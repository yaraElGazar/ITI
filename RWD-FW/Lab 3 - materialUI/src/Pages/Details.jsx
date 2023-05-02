import React from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Movie from '../Components/Movie';

const Details = () => {
    let {id} = useParams();

    const [movie, setMovie] = useState(null);

    // ComponentDidMount
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=7318267e0930fb1578053cb357c3b2cd")
        .then((response) => setMovie((response.data.results).find((movie) => movie.id == id)));
      });

      if(movie) return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Movie key={movie.id} {...movie} ></Movie>
        </div>
    )
    return (<div>Loading ...</div>)
};

export default Details;