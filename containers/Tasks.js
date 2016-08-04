import React     from 'react';
import UsersWrap from './UsersWrap';
import TodosWrap from './TodosWrap';

class PathTasks extends React.Component {

  constructor() {
    super();
    this.state = {id: -1}
  }

  render() {
    return (
      <div style={{textAlign:'center',marginBottom:'50px'}}>
        <UsersWrap userSelected={(id)=> this.setState({id:id})}/>
        <TodosWrap idUserSelected={this.state.id}/>
      </div>
    )
  }
}

export default PathTasks;
