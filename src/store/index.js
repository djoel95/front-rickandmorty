import { applyMiddleware, compose } from 'redux';
import reducers from './reducers'
import thunkMiddleware from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = configureStore(reducers, composeEnhancer(applyMiddleware(thunkMiddleware)));

export default store;