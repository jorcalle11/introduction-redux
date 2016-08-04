import React from 'react';

class TodoActions extends React.Component {
  render() {
    const {toggleCompleted} = this.props;
    return (
      <div style={{margin:'10px auto'}}>
        <button
          className="btn btn-primary margin-right"
          onClick={() => toggleCompleted()}>
          Completar Todos
        </button>
      </div>
    )
  }
}
export default TodoActions;
