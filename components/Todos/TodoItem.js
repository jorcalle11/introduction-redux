import React  from 'react';
import $      from 'jquery';
import moment from 'moment';
import 'moment/locale/es';

class TodoItem extends React.Component {

  render() {
    const {task, user, completedTask, removeTask, userDecrementNumTasks} = this.props;
    let button;

    if (!task.completed) {
      button = <span className="material-icons" data-name="done" onClick={() => completedTask(task.id)}>done</span>
    }

    return (
      <li className="task"
        style={{textDecoration: task.completed ? 'line-through':'none'}}
        id={`task${task.id}`}>
        <strong data-name="id">
          {task.id}.
        </strong>
        {task.text}
        &nbsp;en &nbsp;
        <strong data-name="duration">
          {task.duration}
        </strong>
        <p>Por: <strong>{user.username}</strong> - {moment(task.created).endOf().fromNow()}</p>
        <div>
          {button}
          <span
            className="material-icons"
            data-name="clear"
            onClick={() => {removeTask(task.id); userDecrementNumTasks(task.user_id)}}>
            clear
          </span>
        </div>
      </li>
    )
  }
}

export default TodoItem;
