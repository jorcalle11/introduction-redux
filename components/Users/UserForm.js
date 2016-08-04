import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
    this.state = {
      edit: false,
      user: {
        id: props.users.length + 1,
        name: '',
        age: 23,
        username: '',
        numTasks: 0
      }
    };
  }

  handleChangeName(e) {
    e.preventDefault();
    let newState = Object.assign({},this.state.user,{
      name: e.target.value,
    });
    this.setState({user:newState});
  }

  handleChangeUsername(e) {
    e.preventDefault();
    let newState = Object.assign({},this.state.user,{
      username: e.target.value.trim()
    });
    this.setState({user: newState});
  }

  handleAddUser(e) {
    e.preventDefault();
    if(!this.state.edit) {
      this.props.addUser.call(null,this.state.user);
    } else {
      this.props.editUser(this.state.user);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userToEdit.payload.hasOwnProperty('id')) {
      this.setState({user: nextProps.userToEdit.payload, edit: true});
    } else {
      let newState = {
        id: ++this.state.user.id,
        name: '',
        age: 23,
        username: '',
        numTasks: 0
      }
      this.setState({edit:false, user: newState});
    }
  }

  render() {
    const {user} = this.state;
    return (
      <form className="formAddUser">
        <input
          type="text"
          placeholder="Pepito Perez"
          value={user.name}
          onChange={this.handleChangeName} />
        <input
          type="text"
          name="username"
          placeholder="mickymouse"
          value={user.username}
          onChange={this.handleChangeUsername}
        />
        <button className="btn btn-primary addTask" disabled={!user.name || !user.username} onClick={this.handleAddUser}>
          <i className="material-icons">add</i>
        </button>
      </form>
    );
  }
}

export default UserForm;
