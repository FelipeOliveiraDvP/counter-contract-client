import { SETUP_DRIZZLE_STORE } from '../constants/action-types';

export function setupDrizzle(drizzle, drizzleState) {
    return {
        type: SETUP_DRIZZLE_STORE,
        payload: { drizzle, drizzleState }
    };
}