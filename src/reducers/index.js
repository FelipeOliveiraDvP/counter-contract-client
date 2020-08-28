import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/action-types';

const initialState = {
    count: 0
}

function rootReducer(state = initialState, action) {
    let { count } = state;

    switch(action.type) {
        case INCREMENT_COUNTER:            
            return { ...state, count: count + 1 };
        case DECREMENT_COUNTER:            
            return { ...state, count: count - 1 };
        default:
            return state;
    }
}

export default rootReducer;