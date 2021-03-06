import * as ACTION_TYPES from './../actions/action_types';

const initialState = {
    errMessage: ''
};


const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ERROR:
            return {
                ...state,
                errMessage: action.errMessage
            }
    
        default:
            return state
    }
}

export default errorReducer
