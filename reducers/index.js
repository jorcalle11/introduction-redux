import {combineReducers}    from 'redux';
import {routerReducer}      from 'react-router-redux';
import counterReducer       from './counter';
import todoReducer          from './todo';

const reducers = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
  routing: routerReducer
});

export default reducers;
