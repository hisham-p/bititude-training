import React, {Component} from 'react';
import './home.css';
import Tasks from '../Task/tasks'
import Completed from '../Completed/completed';

class Home extends Component {
    state = {
        task: [],
        completed: []
    }

    onSubmit = (e) => {
        if (e.key === 'Enter') {
            let task = e.target.value;
            let arr = this.state.task;
            arr.push(task);
            this.setState({task: arr})
            e.target.value = '';
        }

    };

    onRemove = (value) => {
        let todoarr = [...this.state.task];
        let index = todoarr.indexOf(value);
        this
            .state
            .completed
            .push(value);
        todoarr.splice(index, 1);
        this.setState({task: todoarr});
    }

    onUpdate = (value, oldvalue) => {

        let updatedArr = [...this.state.task];
        let index = updatedArr.indexOf(oldvalue);
        updatedArr.splice(index, 1, value);
        this.setState({task: updatedArr});
    }

    clearAll = () => {
        let completedArr = [...this.state.completed];
        completedArr.splice(0, completedArr.length);
        this.setState({completed: completedArr})
    }

    render() {
        let todos = (
            <div>
                {this
                    .state
                    .task
                    .map(tasks => {
                        return <Tasks todo={tasks} delete={this.onRemove} update={this.onUpdate}/>
                    })
}
            </div>
        );
        let completed =null;
        if (this.state.completed.length > 0) {
            completed = <Completed complete={this.state.completed} clearTasks={this.clearAll}/>;
        }

        return (
            <div className="container jumbotron">
                <h1>todos</h1>
                <input
                    type="text"
                    onKeyPress={this.onSubmit}
                    className={"input form-control w-100 mb-4"}
                    placeholder="Enter the tasks here"/>
                <ol className="list-group">
                    {todos}
                </ol>
                {completed}
            </div>
        );
    }
}
export default Home;