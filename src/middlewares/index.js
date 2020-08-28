import { LOG_EVENT } from '../constants/action-types';

// TODO: prepare this for drizzle events
export function eventLogMiddleware({ dispatch }) {
    return function(next) {
        return function(action) {

            console.log(action.type);
            //dispatch({ type: LOG_EVENT, payload: action.type });

            return next(action);
        }
    }
}