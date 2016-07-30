import {createStore, applyMiddleware, compose}  from 'redux';
import createLogger                             from 'redux-logger';
import {browserHistory}                         from 'react-router';
import {routerMiddleware}                       from 'react-router-redux';
import reducers                                 from '../reducers';

const logger     = createLogger();
const middleware = routerMiddleware(browserHistory);

const store = createStore(
  reducers,
  compose(
    applyMiddleware(logger,middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
