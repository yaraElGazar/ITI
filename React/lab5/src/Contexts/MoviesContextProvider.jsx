import React from 'react';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';


export const MoviesContext = createContext();

const MoviesContextProvider = (props) => {
    const [movies, setMovies] = useState(null);

    // ComponentDidMount
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=7318267e0930fb1578053cb357c3b2cd")
        .then((response) => setMovies(response.data.results));
      });

    return (
        <MoviesContext.Provider value = {movies}>
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;