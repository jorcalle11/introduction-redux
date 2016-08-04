import React        from 'react'
import {connect}    from 'react-redux';
import * as todo    from '../actions/todo';
import {userIncrementNumTasks, userDecrementNumTasks} from '../actions/user';
import TodoList     from '../components/Todos/TodoList';
import TodoActions  from '../components/Todos/TodoActions';
import TodoForm     from '../components/Todos/TodoForm';

@connect(mapStateToProps,mapDispatchToProps)
class Todos extends React.Component {

  constructor (props) {
    super(props);
    this.state ={taskId: props.tasks.length +1 }
  }

  componentWillReceiveProps(nextProps) {
    var id = nextProps.tasks.length;
    var ids = [];
    nextProps.tasks.map((task) => ids = [...ids, task.id]);

    do {
      id++
    } while (ids.includes(id));

    this.setState({taskId: id})
  }

  render () {
    const {tasks, users, idUserSelected} = this.props;
    let user = users.find((user) => user.id === idUserSelected)

    let tasksRender  = <TodoList
      tasks={tasks}
      users={users}
      completedTask={this.props.completedTask}
      removeTask={this.props.removeTask}
      userDecrementNumTasks={this.props.userDecrementNumTasks}/>

    if (!tasks.length) {
      tasksRender = <h2 className="center">No hay tareas registradas :(</h2>
    }

    return (
      <section className="containerTasks">
        <h3>Lista de Tareas</h3>
        <TodoActions toggleCompleted={this.props.toggleCompleted}/>
        {tasksRender}
        <TodoForm
          addTask={this.props.addTask}
          userIncrementNumTasks={this.props.userIncrementNumTasks}
          taskId={this.state.taskId}
          userId={(user) ? user.id : -1}/>
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
    addTask:         (task) => dispatch(todo.addTask(task)),
    removeTask:      (id)   => dispatch(todo.removeTask(id)),
    completedTask:   (id)   => dispatch(todo.completedTask(id)),
    toggleCompleted: ()     => dispatch(todo.toggleCompleted()),
    userIncrementNumTasks: (id) => dispatch(userIncrementNumTasks(id)),
    userDecrementNumTasks: (id) => dispatch(userDecrementNumTasks(id))
  }
}

export default Todos;
