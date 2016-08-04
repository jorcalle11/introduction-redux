import React        from 'react'
import TodoItem     from './TodoItem';

class TodoList extends React.Component {

  render () {
    const {tasks, users} = this.props;
    return (
      <ul style={{margin:'0px',padding:'0px',textAlign:'left'}}>
        {
          tasks.map((task, index) => {
            return (
              <TodoItem
                name="Task"
                key={index}
                task={task}
                user={users.find((user) => user.id === task.user_id)}
                removeTask={this.props.removeTask}
                completedTask={this.props.completedTask}
                userDecrementNumTasks={this.props.userDecrementNumTasks}
              />
            )
          })
        }
    </ul>
    )
  }
}

export default TodoList;
