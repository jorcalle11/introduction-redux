import React from 'react';
import $ from     'jquery';
import moment from 'moment';
import './main.css';
import 'moment/locale/es';

class Todo extends React.Component {

  handleClickDone(id,e) {
    e.preventDefault();
    $(`#task${id}`).addClass('through');
    this.props.completedTask.call(null,id);
  }

  handleClickClear(id,e) {
    e.preventDefault();
    this.props.removeTask.call(null,id);
  }

  render() {
    const {task, user} = this.props;
    var button;
    if (!task.completed) {
      $(`#task${task.id}`).removeClass('through');
      button = <span className="material-icons" data-name="done" onClick={this.handleClickDone.bind(this,task.id)}>done</span>
    } else {
      $(`#task${task.id}`).addClass('through');
    }
    console.log();
    return (
      <li className="task" id={`task${task.id}`}>
        <strong data-name="id">
          {task.id}.
        </strong>
        {task.text}
        &nbsp;en &nbsp;
        <strong data-name="duration">
          {task.duration}
        </strong>
        <p>Por: <strong>{user[0].username}</strong> - {moment(task.created).endOf().fromNow()}</p>
        <div>
          {button}
          <span
            className="material-icons"
            data-name="clear"
            onClick={this.handleClickClear.bind(this,task.id)}>
            clear
          </span>
        </div>
      </li>
    )
  }
}

export default Todo;
