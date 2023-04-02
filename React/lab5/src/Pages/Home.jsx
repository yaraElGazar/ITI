import React from 'react';
import Movie from '../Components/Movie';
import { useContext } from 'react';
import { MoviesContext } from '../Contexts/MoviesContextProvider';


const Home = () => {
    const movies = useContext(MoviesContext);

      if (!movies) return <div>Loading ...</div>
        return (
            <div style={{margin: '100px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                {movies.map((movie) => <Movie key={movie.id} {...movie} ></Movie>)}
            </div>
        );
};

export default Home;