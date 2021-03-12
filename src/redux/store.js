import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import combineReducers from './root-reducer';

const middlewares = [logger];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(combineReducers, applyMiddleware(...middlewares));

export const persistor = persistStore(store)

const storageItems = { store, persistor }

export default storageItems;