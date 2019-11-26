import React from 'react';

const task = (props) => {
    let tasks = props
        .values
        .map(task => {
            return (
                <li key={Math.random * 10000000} className="list-group-item input-group">
                    <div className="input-group justify-content-between align-items-center">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-transparent border-0">
                                <input type="checkbox" aria-label="Checkbox for following text input"/>
                            </div>
                        </div>
                        <label>{task}</label>
                        {/* <input
                            type="text"
                            value={task}
                            className="form-control border-0"
                            aria-label="Amount (to the nearest dollar)"/> */}
                        <div className="input-group-append">
                            <div className="input-group-text bg-transparent border-0">
                                <button className="btn btn-link" onClick={() => props.remove(task)}>delete</button>
                            </div>
                        </div>
                    </div>
                </li>
            );
        })

    return (
        <React.Fragment>
            {tasks}
        </React.Fragment>
    );
}

export default task;