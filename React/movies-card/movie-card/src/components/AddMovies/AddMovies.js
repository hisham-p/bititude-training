import React, {Component} from 'react';
import './AddMovies.css'

class addMovies extends Component {
    render() {
        return (
            <div>
                <h1 className="pt-5">Add new movies here!</h1>
                <form className="pt-5">
                <div className="form-group my-3">
                        <label>Movie id</label>
                        <input
                            type="text"
                            className="form-control"
                            id="movieTitle"
                            aria-describedby="emailHelp"
                            placeholder="Enter movie id"/>
                        <small id="emailHelp" className="form-text text-muted">Last movie id : 0</small>
                    </div>
                    <div className="form-group my-3">
                        <label>Movie Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="movieTitle"
                            aria-describedby="emailHelp"
                            placeholder="Enter movie name"/>
                        <small id="emailHelp" className="form-text text-muted">Confirm that the film was not uploaded before</small>
                    </div>
                    <div className="form-group my-3">
                        <label>Upload Image</label>
                        <input type="text" className="form-control" id="imageUrl" placeholder="Image url"/>
                        <small className="form-text text-muted">Upload image as url</small>
                    </div>
                    <select className="custom-select my-3">
                        <option disabled>-Select the industry-</option>
                        <option value="1">Hollywood</option>
                        <option value="2">Bollywood</option>
                        <option value="3">Mollywood</option>
                        <option value="4">Tollywood</option>
                        <option value="5">Kollywood</option>
                    </select>
                    <div className="form-group my-3">
                        <label>Cast</label>
                        <input type="text" className="form-control" placeholder="Enter the cast name on by one"/>
                        <button className="btn btn-primary">Add cast</button>
                    </div>
                    <div className="form-group my-3">
                        <label>Description</label>
                        <input type="text" className="form-control" placeholder="Enter the movie description here"/>
                    </div>
                    <button type="submit" className="btn btn-success">Submit Movie</button>
                </form>
            </div>
        );
    }
}

export default addMovies;