import React      from 'react';
import {connect}  from 'react-redux';
import User       from './User';
import NewUser    from './newUser';
import {addUser, removeUser} from '../actions/user';

@connect(mapStateToProps, mapDispatchToProps)
class Users extends React.Component {

  handleClickSelectedUser(id) {
    this.props.selectedUser.call(null,id);
  }

  handleAddUser(user) {
    this.props.addUser(user);
  }

  render() {
    const {users} = this.props;
    return (
      <section className="containerUsers">
        <h3 className="center">Selecciona un Usuario: </h3>
        <div>
          {
            users.map((user,index) => {
              return (
                <User key={index} data={user} selectedUser={this.handleClickSelectedUser.bind(this)}/>
              )
            })
          }
        </div>
        <NewUser users={this.props.users} addUser={this.handleAddUser.bind(this)}/>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.todos.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addUser: (user) => dispatch(addUser(user)),
    removeUser: (id) => dispatch(removeUser(id))
  }
}

export default Users;
