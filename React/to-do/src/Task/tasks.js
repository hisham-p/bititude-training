import React, {useState} from 'react';
import './task.css'

const Tasks = (props) => {
    const [state,
        setstate] = useState(true);
    let toggleInput = () => {
        const doesShow = state;
        setstate(!doesShow);
    }
    return (
        <li className="task d-flex flex-row justify-content-between list-group-item ">
            <input
                type="text"
                readOnly={state}
                // Use Two way binding method to set values to input fields
                placeholder={props.todo}
                className="border-0 w-100 bg-transparent todovalue "
                onDoubleClick={toggleInput}
                onKeyDown={(e) => {
                if (e.keyCode === 13) {
                    props.update(e.target.value, props.todo);
                }
            }}/>
            <button className="btn btn-link h-100" onClick={() => props.delete(props.todo)}>remove</button>
        </li>

    );
}

export default Tasks;
