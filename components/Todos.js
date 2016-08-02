import React                  from 'react'
import {connect}              from 'react-redux';
import $                      from 'jquery';
import {addTask, removeTask, toggleCompleted, completedTask}  from '../actions/todo';
import Users from '../containers/UsersWrap';
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
    this.handleClickCompletedTask = this.handleClickCompletedTask.bind(this);
    this.handleClickSelectedUser = this.handleClickSelectedUser.bind(this);
    this.state = {
      task:{
        id: props.tasks.length +1,
        text: '',
        duration: 1,
        user_id: 1
      }
    }
  }

  handleAddTask(e) {
    e.preventDefault();
    console.log(this.state);
    let task = Object.assign({},this.state.task,{
      duration: `${this.state.task.duration} dias`,
    });
    this.props.addTask(task);
    const newState = Object.assign({},this.state.task, {
      id: ++this.state.task.id,
      text: '',
      duration: 1
    });
    this.setState({task:newState});
  }

  handleClickRemoveTask(id) {
    this.props.removeTask(id);
  }

  handleClickCompletedTask(id) {
    this.props.completedTask(id);
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

  handleClickSelectedUser(id,e) {
    console.log(`en el componente todos ${id}`);
    let newState = Object.assign({},this.state.task,{
      user_id: id
    });
    this.setState({task:newState});
  }

  user(task) {
    return this.props.users.filter((user) => user.id === task.user_id);
  }

  render () {
    const {tasks, toggleCompleted} = this.props;
    const {task} = this.state;

    return (
      <section>
        <Users selectedUser={this.handleClickSelectedUser}/>
        <ul className="list-tasks">
        <li className="header-li">
          <button className="btn btn-primary btn-lg" onClick={() => toggleCompleted()}>Completar Todo</button>
        </li>
        {
          tasks.map((task, index) => {
            return (
              <Todo
                name="Task"
                key={index}
                task={task}
                user={this.user(task)}
                removeTask={this.handleClickRemoveTask}
                completedTask={this.handleClickCompletedTask}
              />
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
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.todos,
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTask:         (task) => {dispatch(addTask(task))},
    removeTask:      (id)   => {dispatch(removeTask(id))},
    toggleCompleted: ()     => {dispatch(toggleCompleted())},
    completedTask:    (id)   => {dispatch(completedTask(id))}
  }
}

export default Todos;
