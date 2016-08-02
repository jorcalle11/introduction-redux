import React                                      from 'react'
import {Provider}                                 from 'react-redux';
import {Router,Route,IndexRoute,browserHistory}   from 'react-router';
import {syncHistoryWithStore}                     from 'react-router-redux';
import store                                      from '../store';
import App                                        from '../containers/App';
import Home                                       from '../components/Home';
import Counter                                    from '../components/Counter';
import PathTasks                                  from '../containers/Tasks';
import About                                      from '../components/About';

const history = syncHistoryWithStore(browserHistory, store);

const Routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="contador" component={Counter}/>
        <Route path="tareas" component={PathTasks}/>
      </Route>
      <Route path="/about" component={About}></Route>
    </Router>
  </Provider>
)

export default Routes;
