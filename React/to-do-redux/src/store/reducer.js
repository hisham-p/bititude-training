import * as actionTypes from './action'
let initialState = {
    tasks :[],
    completed : [],
    disabled : true,
    checked : true
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.INSERT:
                return { 
                    ...state,
                    tasks: state.tasks.concat(action.value)
                }
        case actionTypes.DELETE:
            return state;
        case actionTypes.UPDATE:
            return state;
        default : 
        return state;
    }
}

export default reducer;