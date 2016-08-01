import React from 'react';

class newUser extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
    console.log(props.users);
    this.state = {
      user: {
        id: props.users.length + 1,
        name: {
          first: '',
          last: ''
        },
        age: 23,
        username: '',
        numTasks: 1
      }
    }
  }

  handleChangeFirstName(e) {
    e.preventDefault();
    let newState = Object.assign({},this.state.user,{
      name: {
        first: e.target.value.trim(),
        last: this.state.user.name.last
      }
    });
    this.setState({user:newState});
  }

  handleChangeLastName(e) {
    e.preventDefault();
    let newState = Object.assign({},this.state.user,{
      name: {
        first: this.state.user.name.first,
        last: e.target.value.trim()
      }
    })
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
    this.props.addUser.call(null,this.state.user);
    let newState = {
      id: ++this.state.user.id,
      name: {
        first: '',
        last: ''
      },
      age: 23,
      username: '',
      numTasks: 1
    }
    this.setState({user: newState});
  }

  render() {
    const {user} = this.state;
    return (
      <form className="formAddUser">
        <input
          type="text"
          name="first"
          placeholder="Pepito"
          value={user.name.first}
          onChange={this.handleChangeFirstName}
        />
        <input
          type="text"
          name="last"
          placeholder="Florez"
          value={user.name.last}
          onChange={this.handleChangeLastName}
        />
        <input
          type="text"
          name="username"
          placeholder="mickymouse"
          value={user.username}
          onChange={this.handleChangeUsername}
        />
        <button className="btn btn-primary addTask" onClick={this.handleAddUser}>
          <i className="material-icons">add</i>
        </button>
      </form>
    )
  }
}

export default newUser;
