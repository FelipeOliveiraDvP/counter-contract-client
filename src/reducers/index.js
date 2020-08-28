import { INCREMENT_COUNTER, DECREMENT_COUNTER, LOG_EVENT } from '../constants/action-types';

const initialState = {
    count: 0,
    lastEvent: ''
}

function rootReducer(state = initialState, action) {
    let { count } = state;

    switch(action.type) {
        case INCREMENT_COUNTER:            
            return { ...state, count: count + 1 };
        case DECREMENT_COUNTER:            
            return { ...state, count: count - 1 };
        case LOG_EVENT:
            console.log(action.payload);
            return { ...state, lastEvent: action.payload };        
        default:
            return state;
    }
}

export default rootReducer;