import React, {Component} from 'react';
import './signup.css'

class signup extends Component {
    render() {
        return (
            <div>
                <h4 className="card-title mt-3 text-center">Create Account</h4>
                <p>
                    <button href="#" className="btn btn-block btn-twitter">
                        <i className="fab fa-twitter"></i>
                        Login via Twitter</button>
                    <button href="#" className="btn btn-block btn-facebook">
                        <i className="fab fa-facebook-f"></i>
                        Login via facebook</button>
                </p>
                <p className="divider-text">
                    <span className="bg-light">OR</span>
                </p>
                <form>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-user"></i>
                            </span>
                        </div>
                        <input name="" className="form-control" placeholder="Full name" type="text"/>
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                        <input name="" className="form-control" placeholder="Email address" type="email"/>
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-phone"></i>
                            </span>
                        </div>
                        <select
                            className="custom-select"
                            style={{
                            maxWidth: "120px"
                        }}>
                            <option defaultValue="">+91</option>
                            <option value="1">+966</option>
                            <option value="2">+198</option>
                            <option value="3">+701</option>
                        </select>
                        <input name="" className="form-control" placeholder="Phone number" type="text"/>
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-building"></i>
                            </span>
                        </div>
                        <select className="form-control">
                            <option defaultValue="">
                                Select job type</option>
                            <option>Designer</option>
                            <option>Manager</option>
                            <option>Accaunting</option>
                        </select>
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-lock"></i>
                            </span>
                        </div>
                        <input className="form-control" placeholder="Create password" type="password"/>
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-lock"></i>
                            </span>
                        </div>
                        <input className="form-control" placeholder="Repeat password" type="password"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block">
                            Create Account
                        </button>
                    </div>
                    <p className="text-center">Have an account?
                        <button href="#">Log In</button>
                    </p>
                </form>
            </div>
        );
    }
}

export default signup;