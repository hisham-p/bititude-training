import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Tasks from '../../components/Task/Task';
import Completed from '../../components/Completed/completed';
import * as actionTypes from '../../store/action'
import './home.css'

class home extends Component {
    onSubmit = (e) => { 
        // if(e.key === 'Enter'){
            let value = e.target.value
            console.log(value);
            // e.target.value = '';
            return value;
        // }
    }
    render() {

        return (
            <div className="m-5" style={{}}>
                <div>
                    <h1 style={{
                        fontSize: '4rem'
                    }}>Todos</h1>
                </div>
                <ul className="list-group">

                    <li className="list-group-item input-group d-flex">
                        <div
                            className="input-group-prepend"
                            style={{
                                width: '10%'
                            }}>
                            <button
                                className="btn btn-success border-0"
                                style={{
                                    width: '100%'
                                }}>v</button>
                        </div>
                        <form>
                        <input
                            type="text"
                            className="todo"
                            onSubmit={this.props.onInsert}
                            style={{
                                width: '90%'
                            }}
                            placeholder="What's needs to be done"
                             />
                        </form>
                    </li>
                    <Route path='/' />
                    <Route path="/tasks" component={Tasks} />
                    <Route path="/completed" component={Completed} />
                    <li className="list-group-item">
                        <div className="d-flex flex-row align-items-center justify-content-between">
                            <label>1 item left</label>
                            <nav className="navbar">

                                {/* All tasks including completed one's*/}
                                <Link to="/" className='btn' >All</Link>

                                {/* entered tasks which are not deleted */}
                                <Link to="/tasks" className='btn' >Active</Link>

                                {/* deleted tasks */}
                                <Link to="/completed" className='btn' >Completed</Link>

                                {/* Clear the completed tasks from completed array */}
                                <Link className="btn" >Clear Completed</Link>
                            </nav>
                        </div>
                    </li>
                </ul>
            </div >
        );
    }
}
const mapStateToProps = state => {
    return { tasks: state.tasks };
};
const mapDispatchToProps = dispatch => {
    return {
        onInsert: () => {
            let value = this.onSubmit();
            console.log(value);
            dispatch({ type: actionTypes.INSERT })}
    };
};


export default home;