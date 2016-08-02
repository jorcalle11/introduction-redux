import {combineReducers}    from 'redux';
import {routerReducer}      from 'react-router-redux';
import counterReducer       from './counter';
import todoReducer          from './todo';
import usersReducer         from './users';

const reducers = combineReducers({
  counter: counterReducer,
  users: usersReducer,
  todos: todoReducer,
  routing: routerReducer
});

export default reducers;
