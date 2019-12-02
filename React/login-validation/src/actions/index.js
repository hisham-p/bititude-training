import {ADD_DATA, FETCH_DATA} from './types';
import axios from 'axios';

// Login
export const fetchAllData = () => {
    return (dispatch) => {
        return axios
            .get('/')
            .then(response => {
                console.log(response);
                dispatch(fetchData(response.data));
            })
            .catch(error => {
                throw(error);
            });
    };
};
export const fetchData = (data) => {
    return {type: FETCH_DATA, data}
};


// Signup
export const createPost = (data) => {
    console.log(data);
    return (dispatch) => {
        return axios
            .post('/add', data)
            .then(response => {
                console.log(response);
                dispatch(createPostSuccess(response.data));
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const createPostSuccess = (data) => {
    return {type: ADD_DATA, data}
};