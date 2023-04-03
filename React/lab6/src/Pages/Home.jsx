import { useEffect } from 'react';
import Movie from '../Components/Movie';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../Store/actions/movies-actions';


const Home = () => {
    const movies = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch])

      if (!movies[0]) return <div>Loading ...</div>
        return (
            <div style={{margin: '100px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                {movies[0].map((movie) => <Movie key={movie.id} {...movie} ></Movie>)}
            </div>
        );
};

export default Home;