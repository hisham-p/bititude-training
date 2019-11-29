import React, {Component} from 'react';
import './Industries.css';
import axios from 'axios'

class industry extends Component {
    state = {
        industry: []
    }
    componentDidMount() {
        axios
            .get('/industry')
            .then(response => {
                const updatedindustry = response.data;
                let uniqueArray = [];
                for (let i = 0; i < updatedindustry.length; i++) {
                    if (uniqueArray.indexOf(updatedindustry[i].industry) === -1) {
                        uniqueArray.push(updatedindustry[i].industry);
                    }
                }
                console.log(uniqueArray);
                this.setState({industry: uniqueArray})
            });
    }
    postSelectedHandler = (id) => {
        // this.setState({selectedPostId: id})
        this
            .props
            .history
            .push('/industry/' + id);
    }
    render() {
        let industries = this
            .state
            .industry
            .map(industry => {
                return (
                    <div
                        key={industry}
                        className="col-sm-offset-12 col-lg-offset-4 col-md-offset-6 pt-3 pr-3">
                        <div>
                            <div
                                className="card"
                                style={{
                                width: "18rem"
                            }}>
                                <img
                                    src="https://previews.123rf.com/images/djvstock/djvstock1702/djvstock170205767/71310187-cinema-film-industry-concept-poster-vector-illustration-eps-10.jpg"
                                    className="card-img-top"
                                    alt="..."/>
                                <div className="card-title">
                                    <h3>{industry}</h3>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and
                                        make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })

        return (
            <div className="row">
                {industries}
            </div>

        );
    }
}

export default industry;