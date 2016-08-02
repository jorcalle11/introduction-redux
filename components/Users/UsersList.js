import React from     'react';
import UserItem from  './UserItem';

class UsersList extends React.Component {

  selectedUser(id) {
    console.log(`${id}`);
  }

  removeUser(id) {
    this.props.removeUser.call(null,id);
  }

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
                removeUser={this.removeUser.bind(this)}
                selectedUser={this.selectedUser.bind(this)}
                />
            )
          })
        }
      </div>
    )
  }
}

export default UsersList;
