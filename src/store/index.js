import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index';
import drizzleReducer from '../reducers/drizzle';

import { eventLogMiddleware } from '../middlewares';

const store = createStore(
    combineReducers({
        root: rootReducer,
        drizzle: drizzleReducer
    }),
    applyMiddleware(eventLogMiddleware, thunk)
);

export default store;