import React    from  'react';
import UserItem from  './UserItem';

class UsersList extends React.Component {

  render() {
    const {users} = this.props;
    return (
      <div>
        {
          users.map((user,index) => {
            return (
              <UserItem
                key={index}
                data={user}
                selectUserToEdit={this.props.selectUserToEdit}
                removeUser={this.props.removeUser}
                userSelected={this.props.userSelected}
                removeUserTasks={this.props.removeUserTasks}
                />
            )
          })
        }
      </div>
    )
  }
}

export default UsersList;
