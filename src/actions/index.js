import { LOG_EVENT } from '../constants/action-types';

export function logEvent(event) {
    return {
        type: LOG_EVENT,
        payload: event
    };
}