import React, {Component} from 'react';
import './task.css'

class Tasks extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        disabled: true
    }
    toggleClassHandler = () => {
        const doesShow = this.state.disabled;
        this.setState({
            disabled: !doesShow
        });
    }

    render() {

        return (
            <li
                className="task d-flex flex-row justify-content-between list-group-item "
                onDoubleClick={this.toggleClassHandler}>
                <input
                    type="text"
                    placeholder={this.props.todo}
                    className="border-0 w-100 bg-transparent todovalue "
                    disabled={this.state.disabled}
                    onKeyDown={(e) => (e.keyCode === 13)
                    ? this.props.update(e.target.value, this.props.todo)
                    : null}/>
                <button
                    className="btn btn-link h-100"
                    onClick={() => this.props.delete(this.props.todo)}>remove</button>
            </li>

        );
    }
}
export default Tasks;