import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import Industries from '../../components/Industry/Industry';
import MovieCard from '../../components/MovieCards/MovieCards';
import AddMovie from '../../components/AddMovies/AddMovies'
import './HomePage.css'

class HomePage extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-light bg-light d-flex flex-row sticky-top">
                    <ul className="navbar-nav d-flex flex-row w-100 justify-content-between">
                        <li className="nav-item mr-2">
                            <NavLink to="/" exact>Home</NavLink>
                        </li>
                        <li className="nav-item mr-2">
                            <NavLink to="/industry">Industry</NavLink>
                        </li>
                        <li className="nav-item mr-2">
                            <NavLink to="/all">All Movies</NavLink>
                        </li>
                        <li className="nav-item mr-2">
                            <NavLink to="/newfilm">Add film</NavLink>
                        </li>
                        <li className="nav-item mr-2 d-flex">
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </li>
                    </ul>
                </nav>
                <div className="bd-example">
                    <div
                        id="carouselExampleCaptions"
                        className="carousel slide"
                        data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://i.ytimg.com/vi/zrAcKxQxe9E/maxresdefault.jpg" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Latest movie released 1</h5>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://i.ytimg.com/vi/zrAcKxQxe9E/maxresdefault.jpg" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Latest movie released 2</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://i.ytimg.com/vi/zrAcKxQxe9E/maxresdefault.jpg" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Latest movie released 3</h5>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </div>
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#carouselExampleCaptions"
                            role="button"
                            data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselExampleCaptions"
                            role="button"
                            data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <Switch>
                    <Route path='/categories'/>
                    <Route path='/all' component={MovieCard}/>
                    <Route path='/industry' component={Industries}/>
                    <Route path="/newfilm" component={AddMovie}/>
                </Switch>
            </div>
        );
    }
}

export default HomePage;