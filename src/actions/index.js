import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/action-types';
import drizzle from '../drizzle';
const { Counter } = drizzle.contracts;

export function incrementCounter() {
    return function(dispatch) {
        return Counter.methods.increment().call()
            .then(res => {
                console.log(res);
                dispatch({ type: INCREMENT_COUNTER, payload: 0})
            })
    }    
}

export function decrementCounter() {
    return { type: DECREMENT_COUNTER };
}

async function getCount() {
    const { Counter } = drizzle.contracts;
    return await Counter.methods.getCount().call();
}