import {ADD_DATA , FETCH_DATA} from '../actions/types';

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_DATA:
            return [
                ...state,
                action.payload
            ];
        case FETCH_DATA:
            console.log(state);
            return state;
        default:
            return null;
    }

}

export default reducer;