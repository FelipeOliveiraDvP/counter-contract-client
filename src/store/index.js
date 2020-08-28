import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';

import { eventLogMiddleware } from '../middlewares';

const store = createStore(
    rootReducer,
    applyMiddleware(eventLogMiddleware)
);

export default store;