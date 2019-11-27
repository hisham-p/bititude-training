import React, {Component} from 'react';
import './MovieCards.css';
import {Route, NavLink} from 'react-router-dom'
import axios from 'axios';
import Industry from '../Industry/Industry'

class MovieCard extends Component {
    state = {
        movies: []
    }
    componentDidMount() {
        // console.log(this.props);
        axios
            .get('/movies')
            .then(response => {
                const updatedmovies = response.data;
                this.setState({movies: updatedmovies})
                console.log(response);
            });
    }

    render() {
        let movies = this
            .state
            .movies
            .map(movie => {
                return ( 
                        <div className="col-sm-offset-12 col-lg-offset-4 col-md-offset-6 pt-3 pr-3">
                            <div
                                className="card h-100"
                                style={{
                                width: "10rem"
                            }}>
                                <img
                                    src={movie.imgmovie}
                                    className="card-img-top"
                                    style={{
                                    height: '236px'
                                }}
                                    alt="..."/>
                                <div className="card-title">
                                    <h5>{movie.title}</h5>
                                </div>
                                <div className="card-body">
                                    <p
                                        className="card-text"
                                        style={{
                                        fontSize: '12px'
                                    }}>
                                        <b>Industry</b>
                                        : {movie.industry}<br/>
                                        <b>Cast</b>
                                        : {movie.cast}</p>
                                </div>
                            </div>
                        </div>
                );
            });
        return (
            <div>
                <div className="row pl-3">
                    {movies}
                </div>
                <Route path='/industry' component={Industry}/>
            </div>
        );
    }
}

export default MovieCard;