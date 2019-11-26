import React from 'react';
import { Route, Link ,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
// import Tasks from '../../components/Task/Task'
// import PropTypes from 'prop-types'
import TaskControl from '../../components/TaskControl/taskControl';
import Completed from '../../components/Completed/completed';
import * as actionTypes from '../../store/actions/actionTypes'
import './home.css'

const home=({
    onInsert,
    onRemove,
    tasks,
    completed,
    onCombined,
    onClearAll,
    onRemoveCompleted}) =>{
        console.log('PROPS: ', onCombined);
        return (
            <div className="m-5" style={{}}>
                <div>
                    <h1 style={{
                        fontSize: '4rem'
                    }}>Redux-Test</h1>
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

                        <input
                            type="text"
                            className="todo"
                            onKeyPress={e =>
                                 e.key === 'Enter' 
                                 ? (onInsert(e.target.value), e.target.value='') 
                                 : null}
                            style={{
                                width: '90%'
                            }}
                            placeholder="What's needs to be done"
                        />

                    </li>
                    <Redirect from='/' to='/tasks'/>
                    {/* <Route path='/all' render={()=><Tasks key={Math.random * 1500} values={onCombined }/>}/> */}
                    <Route path="/tasks" render={()=><TaskControl values={tasks} remove={onRemove}/>} />
                    <Route path="/completed" render={()=> <Completed values={completed} remove={onRemoveCompleted}/>} />  
                    <li className="list-group-item">
                        <div className="d-flex flex-row align-items-center justify-content-between">
                            <label>{tasks.length === 0 ? 0 + " items" : tasks.length + " items left"}</label>
                            <nav className="navbar">

                                {/* All tasks including completed one's*/}
                                {/* <Link to="/all" className='btn'>All</Link> */}

                                {/* entered tasks which are not deleted */}
                                <Link to="/tasks" className='btn'  >Active</Link>

                                {/* deleted tasks */}
                                <Link to="/completed" className='btn'>Completed</Link>

                                {/* Clear the completed tasks from completed array */}
                                {/* <button onClick={onClearAll} className="btn" >Clear Completed</button> */}
                            </nav>
                        </div>
                    </li>
                </ul>
            </div >
        );
    
}
const mapStateToProps = state => {
    // console.log(state);
    return { tasks: state.tasks , completed  :state.completed , combined :state.combined};
};
const mapDispatchToProps = dispatch => {
    return {
        onInsert: (value) => {
            if(value.length === 0)
            alert("enter a valid value");
            else
            dispatch({ type: actionTypes.INSERT , value :value })
        },
        onRemove : (value)=> dispatch({type : actionTypes.DELETE , value : value}),
        onRemoveCompleted : (value) => dispatch({type :actionTypes.DELETE_COMPLETED ,value : value}),
        onClearAll :()=> dispatch({type : actionTypes.CLEARALL}),
        onCombined : ()=> dispatch({type : actionTypes.SHOW_ALL})
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(home);