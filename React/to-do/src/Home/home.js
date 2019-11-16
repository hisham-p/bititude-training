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
        this.state.completed.push(value);
        todoarr.splice(index, 1);
        this.setState({task: todoarr});
        // console.log("Before : " + todoarr); console.log("Index No to delete: " +
        // index); console.log("Deleted element : " + todoarr[index]);
        // console.log("After : " + todoarr);
    }

    render() {
        let todos = (
            <div>
                {this
                    .state
                    .task
                    .map(tasks => {
                        // console.log(tasks);

                        return <Tasks todo={tasks} delete={this.onRemove} key={tasks}/>
                    })
}
            </div>
        );

        // let complete = (
        //     <div>
        //         {this
        //             .state
        //             .completed
        //             .map(complete => <Completed tasks={complete}/>)}
        //     </div>
        // );

        // let array = ();
        return (
            <div className="container jumbotron ">
                <h1>todos</h1>
                <input
                    type="text"
                    onKeyPress={this.onSubmit}
                    className="input form-control w-100 mb-4"
                    placeholder="Enter the tasks here"/>
                <ol>
                    {todos}
                </ol>
                <div className="my-5">  
                    {/* {complete} */}
                </div>
                {/* <Tasks/> */}
                <Completed complete={this.state.completed}/>
            </div>
        );
    }
}
export default Home;