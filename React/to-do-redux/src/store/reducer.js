import * as actionTypes from './actions/actionTypes'
let initialState = {
    tasks: [],
    completed: [],
    combined :[],
    disabled: true,
    checked: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INSERT:
            // console.log("reducer : "+action.value);
            return {
                ...state,
                tasks: state
                    .tasks
                    .concat(action.value)
            }


        case actionTypes.DELETE:
            let updatedArray = state
                .tasks
                .filter(task => task !== action.value);
            state
                .completed
                .push(action.value);
            return {
                ...state,
                tasks: updatedArray,
                completed: state.completed
            }


        // case actionTypes.UPDATE:
        //     return state;


        case actionTypes.DELETE_COMPLETED:
                console.log("Completd passed : "+action.value);
                
                let array = state
                .completed
                .filter(task => task !== action.value);
            return{
                ...state, 
                completed: array
            }


        case actionTypes.CLEARALL:
            let clearAll = state.completed.splice(0,state.completed.length);
            return {
                completed : clearAll
            }

        case actionTypes.SHOW_ALL :
            // let combinedArray = state.tasks.concat(state.completed);
            // console.log(combinedArray);    
            return{
                ...state,
                combined : state.tasks
            }


        default:
            return state;
    }
}

export default reducer;