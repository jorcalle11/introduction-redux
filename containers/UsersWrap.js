import React      from 'react';
import {connect}  from 'react-redux';
import UsersList  from '../components/Users/UsersList';
import UserForm    from '../components/Users/UserForm';
import {addUser, removeUser, editUser} from '../actions/user';
import {removeUserTasks} from '../actions/todo';

@connect(mapStateToProps, mapDispatchToProps)
class Users extends React.Component {

  constructor(){
    super();
    this.state = {
      payload: {}
    }
  }

  handleSelectUserToEdit(user) {
    this.setState({
      payload: {
        id: user.id,
        name: user.name,
        username: user.username
      }
    });
  }

  handleEditUser(user) {
    this.props.editUser(user);
    this.setState({payload:{}});
  }

  render() {
    const {users} = this.props;

    let usersRender = <UsersList
      userSelected={this.props.userSelected}
      selectUserToEdit={this.handleSelectUserToEdit.bind(this)}
      users={this.props.users}
      removeUser={this.props.removeUser}
      removeUserTasks={this.props.removeUserTasks}
    />

    if(!users.length) {
      usersRender = <h2 className="center">No hay usuarios registrados :(</h2>
    }

    return (
      <section className="containerUsers">
        <h3 className="center">Selecciona un Usuario: </h3>
        {usersRender}
        <UserForm
          users={this.props.users}
          userToEdit={this.state}
          editUser={this.handleEditUser.bind(this)}
          addUser={(user)=> this.props.addUser(user)}
          />
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addUser: (user) => dispatch(addUser(user)),
    editUser: (id,user) => dispatch(editUser(id,user)),
    removeUser: (id) => dispatch(removeUser(id)),
    removeUserTasks: (id) => dispatch(removeUserTasks(id))
  }
}

export default Users;
