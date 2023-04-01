import React, { Component } from 'react';

class Movie extends Component {
    render() {
        return (
            <>
            
            <div className="card mx-auto my-4" style = {{width: "30rem"}} >
                <img className="card-img-top" src={'https://image.tmdb.org/t/p/original' + this.props.poster_path} alt={this.props.title}/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.overview}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Release Date: {this.props.release_date}</li>
                    <li className="list-group-item">Rate: {this.props.vote_average}</li>
                </ul>
            </div>
            
            </>
        );
    }
}

export default Movie;