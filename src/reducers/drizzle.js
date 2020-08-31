import { SETUP_DRIZZLE_STORE } from '../constants/action-types';

const initialState = {
    drizzle: null,
    drizzleState: null
};

function drizzleReducer(state = initialState, action) {
    let { type, payload } = action;

    switch(type) {
        case SETUP_DRIZZLE_STORE:
            return { 
                ...state, 
                drizzle: payload.drizzle,
                drizzleState: payload.drizzleState
            }
        default:
            return state;
    }
}

export default drizzleReducer;