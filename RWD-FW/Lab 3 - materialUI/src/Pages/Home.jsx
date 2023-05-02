import React, { useState, useEffect } from 'react';
import axios from "axios";
import Movie from '../Components/Movie';


const Home = () => {
    const [movies, setMovies] = useState(null);

    // ComponentDidMount
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=7318267e0930fb1578053cb357c3b2cd")
        .then((response) => setMovies(response.data.results));
      });

      if (!movies) return <div>Loading ...</div>
        return (
            <div style={{margin: '100px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                {movies.map((movie) => <Movie key={movie.id} {...movie} ></Movie>)}
            </div>
        );
};

export default Home;