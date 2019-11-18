import React from 'react';
import './completed.css'

const completed = (props) => {
    let array = props.complete;
    let list = array.map(item => <li className="list-group-item completedTasks" id="completed">{item}</li>)

    return (
        <div className="container px-5">
            <h3>
                Completed Task
            </h3>
            <ul className="list-group">
                {list}
            </ul>
            <button className="btn btn-link" onClick={props.clearTasks}>Clear all completed task</button>
        </div>
    );

}

export default completed;