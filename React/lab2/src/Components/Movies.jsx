import React, { Component } from 'react';
import axios from "axios";
import Movie from './Movie';


class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {movies: null};
      }
    render() {
        if (!this.state.movies) return <div>Loading ...</div>
        return (
            <div>
                {this.state.movies.map((movie) => <Movie key={movie.id} {...movie} ></Movie>)}
            </div>
        );
    }

    componentDidMount() {
        axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=7318267e0930fb1578053cb357c3b2cd")
        .then((response) => this.setState({movies: response.data.results}));
    }

}

export default Movies;