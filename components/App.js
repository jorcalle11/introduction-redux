import React from 'react'
import {connect} from 'react-redux';
import {incrementCounter, decrementCounter} from '../actions';

function mapStateToProps(state, props) {
  return {
    estado : state
  }
}

class App extends React.Component {

  constructor (props) {
    super(props);
    this.handleClickIncrement = this.handleClickIncrement.bind(this);
    this.handleClickDecrement = this.handleClickDecrement.bind(this);
  }

  handleClickIncrement(e) {
    e.preventDefault();
    this.props.dispatch(incrementCounter(2));
  }

  handleClickDecrement(e) {
    e.preventDefault();
    this.props.dispatch(decrementCounter(1));
  }

  render () {
    return (
      <div>
        <h2>Contador</h2>
        <h1>{this.props.estado}</h1>
        <button onClick={this.handleClickIncrement}>+</button>
        <button onClick={this.handleClickDecrement}>-</button>
      </div>
    )
  }
}

export default connect(mapStateToProps)(App);
