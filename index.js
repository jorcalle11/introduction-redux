import React          from 'react';
import ReactDOM       from 'react-dom';
import {Provider}     from 'react-redux';
import store          from './store';
import App            from './components/App';

const mount = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  mount
)

/*
function render () {
  ReactDOM.render(
    <App estado = {store.getState()} increment={()=>{store.dispatch({type:'INCREMENT_COUNTER', increment: 2})}} decrement={()=>store.dispatch({type:'DECREMENT_COUNTER', decrement: 3})}/>,
    mount
  );
}
render();
store.subscribe(render);
*/
