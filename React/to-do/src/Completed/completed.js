import React from 'react';

const completed = (props) => {
    let array = props.complete;
    let list = array.map(item => <li>{item}</li>)

    return (
        <div>
            <h3>
                Completed Task
            </h3>
            <ul>
                {list}
            </ul>
        </div>
    );

}

export default completed;