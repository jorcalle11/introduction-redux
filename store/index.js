import {createStore}  from 'redux';
import counterReducer from '../reducers';

export default createStore(counterReducer);
