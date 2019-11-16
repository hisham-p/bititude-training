import React from 'react';

const Tasks = (props) => {
    const style = {
        // border: '2px solid black'
    }
    return (

        <li style={style} className="task d-flex flex-row justify-content-between">
            {props.todo}
            <button className="btn btn-light" onClick={() => props.delete(props.todo)}>remove</button>
        </li>

    );
}
export default Tasks;