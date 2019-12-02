import React, {Component} from 'react';
import './homepage.css';
import {Route} from 'react-router-dom'
import Navbar from './navbar/navbar';
import Login from './login/login';
import Signup from './signup/signup'
import About from './about/about'
import Footer from './footer/footer';

class homepage extends Component {
    render() {
        // if designation of the data is admin, then login to admin page using route
        // Else if designation of the data is user , then login to user page
        return (
            <div className=" container">
                <Navbar/>
                <Route path='/login' component={Login}/>
                <Route path='/signup' component={Signup}/>
                <Route path='/about' component={About}/>
                <Footer/>
            </div>
        );
    }
}

export default homepage;