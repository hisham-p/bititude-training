import React, {Component} from 'react';

class home extends Component {
    render() {
        let render = (
            <React.Fragment>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text bg-transparent border-0">
                                <input type="checkbox" aria-label="Checkbox for following text input"/>
                            </div>
                        </div>
                        <input
                            type="text"
                            class="form-control border-0"
                            aria-label="Amount (to the nearest dollar)"/>
                        <div class="input-group-append">
                            <div class="input-group-text bg-transparent border-0">
                                <button className="btn btn-link">remove</button>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        );
        return (
            <li className="list-group-item input-group">
                {render}
            </li>
        );
    }
}

export default home;