import React from 'react';

const home = (props)=>{
        let tasks = props
            .values
            .map(task => {
                return (
                    <li key={Math.random} className="list-group-item input-group">
                        <div class="input-group justify-content-around align-items-center">
                            {/* <div class="input-group-prepend">
                                <div class="input-group-text bg-transparent border-0">
                                    <input type="checkbox" aria-label="Checkbox for following text input"/>
                                </div>
                            </div> */}
                            <label style={{textDecoration :'line-through'}}>{task}</label>
                            <div class="input-group-append">
                                <div class="input-group-text bg-transparent border-0">
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


export default home;