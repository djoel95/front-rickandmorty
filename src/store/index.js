import reducers from './reducers'
import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

const store = configureStore({ reducer: reducers, middleware: (defaultMiddleware) => { return defaultMiddleware({ thunk: true }).concat(thunkMiddleware) }, devTools: process.env.NODE_ENV !== "production" });

export default store;