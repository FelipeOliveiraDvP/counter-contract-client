import { LOG_EVENT } from '../constants/action-types';

const initialState = {
    lastEvent: ''
}

function rootReducer(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case LOG_EVENT:            
            return { ...state, lastEvent: payload };        
        default:
            return state;
    }
}

export default rootReducer;