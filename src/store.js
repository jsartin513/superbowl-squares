import {createStore, applyMiddleware, compose}  from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

INITIAL_STORE = {};

const middleware = thunk;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  INITIAL_STORE,
  composeEnhancers(applyMiddleware(middleware))
);

export default store;