import React, {Component} from 'react';

class task extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <li className="list-group-item input-group">
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
                </li>
            </React.Fragment>
        );
    }
}

export default task;