import React                                from 'react'
import {connect}                            from 'react-redux';
import {incrementCounter, decrementCounter} from '../actions/counter';

@connect(mapStateToProps,mapDispatchToProps)
class Counter extends React.Component {

  constructor (props) {
    super(props);
    this.handleClickIncrement = this.handleClickIncrement.bind(this);
    this.handleClickDecrement = this.handleClickDecrement.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {valor: 10, run: false};
    this.timer = null;
  }

  handleClickIncrement(e) {
    e.preventDefault();
    if(!this.state.run) {
      this.timer = setInterval(() => this.props.increment(this.state.valor),1000);
      this.setState(Object.assign({},this.state,{
        run: true
      }));
    }
  }

  handleClickDecrement(e) {
    e.preventDefault();
    if (!this.state.run) {
      this.timer = setInterval(() => this.props.decrement(this.state.valor),1000);
      this.setState(Object.assign({},this.state,{
        run: true
      }));
    }
  }

  handleStop(e) {
    e.preventDefault();
    if (this.state.run || this.props.counter !== 0) {
      clearInterval(this.timer);
      this.props.decrement(this.props.counter);
      this.setState(Object.assign({},this.state,{
        run: false
      }));
    }
  }

  handlePause(e) {
    e.preventDefault();
    if (this.state.run) {
      clearInterval(this.timer);
      this.setState(Object.assign({},this.state,{
        run: false
      }));
    }
  }

  handleChange(e) {
    this.setState({valor: Number(e.target.value.trim())});
  }

  render () {
    const {name, counter} = this.props;
    return (
      <section className="containerCounter">
        <h2>{name}</h2>
        <p>Se va a contar de {this.state.valor} en {this.state.valor}</p>
        <h1>{counter}</h1>
        <form>
          <input
            type="number"
            style={{margin:'5px auto',display:'block'}}
            value={this.state.valor}
            onChange={this.handleChange}
          />
        <div style={{margin:'20px auto'}}>
          <button onClick={this.handleClickIncrement} className="btn btn-success margin-right">
            <i className="material-icons">play_arrow</i>
          </button>
          <button onClick={this.handlePause} className="btn margin-right">
            <i className="material-icons">pause</i>
          </button>
          <button onClick={this.handleClickDecrement} className="btn btn-primary margin-right">
            <i  className="material-icons" style={{transform:'rotateY(180deg)'}}>play_arrow</i>
          </button>
          <button onClick={this.handleStop} className="btn btn-danger margin-right">
            <i className="material-icons">stop</i>
          </button>
        </div>
        </form>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increment: (value) => {dispatch(incrementCounter(value))},
    decrement: (value) => {dispatch(decrementCounter(value))}
  }
}

export default Counter;
