import React, {Component} from 'react';
import './task.css'

class Tasks extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }
    state = {
        disabled: true
    }

    render() {
        let todo =null;
            if(this.state.disabled){
                todo = <label className="task" onDoubleClick={()=>{
                    this.setState({disabled : false})
                }}>{this.props.todo}</label>;     
            }
            else{
                todo = <input
                type="text"
                className="w-100 todovalue "
                onChange={(e)=> this.props.update(e.target.value , this.props.todo)}
                value={this.props.todo}
                onKeyDown={(e) => {
                if (e.keyCode === 13) {
                    this
                        .props
                        .update(e.target.value, this.props.todo);
                    this.setState({disabled: true});
                    e.target.value = '';
                }
            }}/>;

            }

        return (
            <li className="task d-flex flex-row justify-content-between list-group-item ">
                {todo}
                <button
                    className="btn btn-link h-100"
                    onClick={() => this.props.delete(this.props.todo)}>remove</button>
            </li>

        );
    }
}

export default Tasks;
