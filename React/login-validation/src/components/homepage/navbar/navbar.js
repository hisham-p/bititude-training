import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import './navbar.css'

class navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark d-flex flex-row sticky-top">
            <ul className="navbar-nav d-flex flex-row w-100 justify-content-between">
                <li className="nav-item mr-2">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav-item mr-2">
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li className="nav-item mr-2">
                    <NavLink to="/signup">Sign up</NavLink>
                </li>
                <li className="nav-item mr-2">
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
        </nav>
        );
    }
}

export default navbar;