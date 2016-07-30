import React                  from 'react'
import {connect}              from 'react-redux';
import {addTask, removeTask}  from '../actions/todo';
import Todo                   from './Todo';
import './main.css';

@connect(mapStateToProps,mapDispatchToProps)
class Todos extends React.Component {

  constructor (props) {
    super(props);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeDuration = this.handleChangeDuration.bind(this);
    this.handleClickRemoveTask = this.handleClickRemoveTask.bind(this);
    this.state = {
      task:{
        id: props.todos.tasks.length +1,
        text: '',
        duration: 1,
      }
    }
  }

  handleAddTask(e) {
    e.preventDefault();
    let task = Object.assign({},this.state.task,{
      user_id: 1,
      duration: `${this.state.task.duration} dias`,
    });
    this.props.addTask(task);
    const newState = Object.assign({},this.state, {
      task: {
        id: this.props.todos.tasks.length + 2,
        text:'',
        duration: 1
      }
    });
    this.setState(newState);
  }

  handleClickRemoveTask(id) {
    this.props.removeTask(id);
  }

  handleChangeText(e) {
    let newState = Object.assign({},this.state.task,{
      text: e.target.value
    });
    this.setState({task:newState});
  }

  handleChangeDuration(e) {
    let newState = Object.assign({},this.state.task,{
      duration: e.target.value
    });
    this.setState({task:newState});
  }

  render () {
    const {name, todos, dispatch} = this.props;
    const {task} = this.state;
    return (
      <ul className="list-tasks">
          {
            todos.tasks.map((task, index) => {
              return (
                <Todo name="Task" key={index} task={task} dispatch={dispatch} removeTask={this.handleClickRemoveTask}/>
              )
            })
          }
          <li className="task">
            <strong data-name="id">{task.id}.</strong>
            <input
              type="text"
              placeholder="Mi super tarea"
              value={task.text}
              onChange={this.handleChangeText}
            />
            &nbsp;en&nbsp;
            <input
              type="number"
              name="duration"
              placeholder="10"
              value={task.duration}
              onChange={this.handleChangeDuration}
            />
            dias
            <button className="btn btn-primary addTask" onClick={this.handleAddTask}>
              <i className="material-icons">add</i>
            </button>
          </li>
        </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTask: (task) => {dispatch(addTask(task))},
    removeTask: (id) => {dispatch(removeTask(id))}
  }
}

export default Todos;
