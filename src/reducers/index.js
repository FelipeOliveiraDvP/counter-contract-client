import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/action-types';

const initialState = {
    count: 0
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case INCREMENT_COUNTER:
            return { ...state, count: state.count++ };
        case DECREMENT_COUNTER:
            return { ...state, count: state.count-- };
        default:
            return state;
    }
}

export default rootReducer;