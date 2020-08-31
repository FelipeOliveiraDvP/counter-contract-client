import { INCREMENT_COUNTER, DECREMENT_COUNTER, LOG_EVENT } from '../constants/action-types';

const initialState = {
    count: 0,
    lastEvent: ''
}

function rootReducer(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case INCREMENT_COUNTER:            
            return { ...state, count: payload.count };
        case DECREMENT_COUNTER:            
            return { ...state, count: payload.count };
        case LOG_EVENT:            
            return { ...state, lastEvent: payload.event };        
        default:
            return state;
    }
}

export default rootReducer;