import React      from 'react';
import {connect}  from 'react-redux';
import UsersList  from '../components/Users/UsersList';
import NewUser    from '../components/Users/UserForm';
import {addUser, removeUser} from '../actions/user';

@connect(mapStateToProps, mapDispatchToProps)
class Users extends React.Component {

  render() {
    const {users} = this.props;

    let usersRender = <UsersList
      users={this.props.users}
      removeUser={(id)=> this.props.removeUser(id)}
    />

    if(!users.length) {
      usersRender = <h2 className="center">No hay usuarios registrados :(</h2>
    }

    return (
      <section className="containerUsers">
        <h3 className="center">Selecciona un Usuario: </h3>
        {usersRender}
        <NewUser
          users={this.props.users}
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
    removeUser: (id) => dispatch(removeUser(id))
  }
}

export default Users;
