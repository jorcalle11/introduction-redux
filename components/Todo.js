import React from 'react';
import $ from     'jquery';
import './main.css';

class Todo extends React.Component {

  handleClickDone(id,e) {
    e.preventDefault();
    $(`#task${id}`).addClass('through');
  }

  handleClickClear(id,e) {
    e.preventDefault();
    this.props.removeTask.call(null,id);
  }

  render() {
    const {task} = this.props;

    return (
      <li className="task" id={`task${task.id}`}>
        <strong data-name="id">{task.id}.</strong>
        {task.text}
        &nbsp;en <strong data-name="duration">{task.duration}</strong>
        <div>
          <span className="material-icons" data-name="done" onClick={this.handleClickDone.bind(this,task.id)}>done</span>
          <span className="material-icons" data-name="clear" onClick={this.handleClickClear.bind(this,task.id)}>clear</span>
        </div>
      </li>
    )
  }
}

export default Todo;
