import React from 'react';
import './login.css';
import {connect} from 'react-redux';
import {ADD_DATA} from '../../../actions/types'

const login = ({data}) => {
    let onChange = (event) => {}

    let post = (event) => {
        event.preventDefault();
        console.log(event);

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Sign In</h5>
                            <form className="form-signin" onSubmit={post}>
                                <div className="form-label-group">
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={onChange}
                                        id="inputEmail"
                                        className="form-control"
                                        placeholder="Email address"
                                        required
                                        autoFocus/>
                                </div>

                                <div className="form-label-group mb-4">
                                    <input
                                        onChange={onChange}
                                        name="password"
                                        type="password"
                                        id="inputPassword"
                                        className="form-control"
                                        placeholder="Password"
                                        required/>
                                </div>
                                <button
                                    className="btn btn-lg btn-primary btn-block text-uppercase"
                                    type="submit">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {data: state.posts};
};
const mapDispatchToProps = dispatch => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(login);