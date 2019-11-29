import React, {Component} from 'react';
import axios from 'axios'

class MovieCard extends Component {
    state = {
        loadedMovie: []
    }
    componentDidMount() {
        // console.log(this.props);
        this.loadData();
    }
    componentDidUpdate() {
        this.loadData();
    }
    loadData() {
        if (this.props.match.params.id) {
            if (!this.state.loadedMovie || (this.state.loadedMovie && this.state.loadedMovie._id !== + this.props.match.params.id)) {
                axios
                    .get('/industry/movies/' + this.props.match.params.id)
                    .then(response => this.setState({loadedMovie: response.data}));
            }
        }
    }
    render() {
        let card = this
            .state
            .loadedMovie
            .map(movie => {
                return (
                    <div key={movie._id}>
                        <h1>{movie.title}</h1>
                        <img style={{height: '500px'}} src={movie.imgmovie} alt='movie poster'/>
                        <p>
                            <b>Cast</b>
                            : {movie.cast}</p>
                        <p>
                            <u>
                                <b>About Movie :
                                </b>
                            </u><br/>
                {movie.description}</p>
                    </div>
                )
            });
        return (
            <div>
                {card}
            </div>
        );
    }
}

export default MovieCard;