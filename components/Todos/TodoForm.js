import React from 'react';

class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      task : {
        id: props.taskId,
        text: '',
        duration: 1,
        user_id: props.userId
      }
    }
  }

  handleAddTask() {
    const {task} = this.state;
    if (task.text && task.user_id > 0) {
      let task = Object.assign({},this.state.task,{
        duration: `${this.state.task.duration} dias`,
      });
      this.props.addTask(task);
      this.props.userIncrementNumTasks(task.user_id);
    }

    if (task.user_id < 0) {
      alert('Primero selecciona un Usuario');
    }
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

  componentWillReceiveProps(nextProps) {
    let task = {
      id: nextProps.taskId,
      text: '',
      duration: 1,
      user_id: nextProps.userId
    }
    this.setState({task:task});
  }

  render() {
    const {task} = this.state;
    return (
      <li className="task">
        <strong data-name="id">{task.id}.</strong>
        <input
          type="text"
          placeholder="Mi super tarea"
          value={task.text}
          onChange={this.handleChangeText.bind(this)}
        />
        &nbsp;en&nbsp;
        <input
          type="number"
          name="duration"
          placeholder="10"
          value={task.duration}
          onChange={this.handleChangeDuration.bind(this)}
        />
        dias
        <button className="btn btn-primary addTask" onClick={this.handleAddTask.bind(this)}>
          <i className="material-icons">add</i>
        </button>
      </li>
    )
  }
}

export default TodoForm;
