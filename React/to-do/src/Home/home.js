import React, {Component} from 'react';
import './home.css';
import Tasks from '../Task/tasks'
import Completed from '../Completed/completed';
// import { string } from 'postcss-selector-parser';
class Home extends Component {
    state = {
        task: [],
        completed: []
    }

    onSubmit = (e) => {

        if (e.key === 'Enter') {
            // console.log(e.target.value);
            let task = e.target.value;
            let arr = this.state.task;
            arr.push(task);
            this.setState({task: arr})
            // console.log(this.state.task);
            e.target.value = '';
        }

    };

    onRemove = (value) => {
        // let todoarr = this.state.task;
        let todoarr = [...this.state.task];
        let index = todoarr.indexOf(value);
        this
            .state
            .completed
            .push(value);
        todoarr.splice(index, 1);
        this.setState({task: todoarr});
        // console.log("Before : " + todoarr); console.log("Index No to delete: " +
        // index); console.log("Deleted element : " + todoarr[index]);
        // console.log("After : " + todoarr);
    }

    onUpdate = (value, oldvalue) => {
        console.log("updated : " + value);
        console.log("old value : " + oldvalue);
        if (value.length !== 0) {
            let updatedArr = [...this.state.task];
            let index = updatedArr.indexOf(oldvalue);
            console.log(index);
            updatedArr.splice(index, 1, value);
            this.setState({task: updatedArr})
        } else if (value.length === 0) {
            return alert("enter a valid value")
        }
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
                        // console.log(tasks);

                        return <Tasks todo={tasks} delete={this.onRemove} update={this.onUpdate}/>
                    })
}
            </div>
        );

        // let complete = (     <div>         {this             .state .completed
        // .map(complete => <Completed tasks={complete}/>)} </div> ); let array = ();
        return (
            <div className="container">
                <h1>todos</h1>
                <input
                    type="text"
                    onKeyPress={this.onSubmit}
                    className="input form-control w-100 mb-4"
                    placeholder="Enter the tasks here"/>
                <ol className="list-group">
                    {todos}
                </ol>
                <div className="my-5"></div>
                <Completed complete={this.state.completed} clearTasks={this.clearAll}/>
            </div>
        );
    }
}
export default Home;