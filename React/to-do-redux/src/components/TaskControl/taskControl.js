import React from 'react';
import Tasks from '../Task/Task'

const TaskControl = (props) => {
    return (<Tasks values={props.values} remove={props.remove}/>);
}
export default TaskControl;