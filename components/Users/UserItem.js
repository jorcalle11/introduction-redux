import React from 'react';
import $     from 'jquery';

class UserItem extends React.Component {

  selectItem(id) {
    $('.selected').remove();
    $(`#data${id}`).append('<i class="material-icons selected">done</i>');
    this.props.userSelected(id);
    this.onMouseOut(id);
  }

  handleSelectUserToEdit(user) {
    this.props.selectUserToEdit(user);
    this.onMouseOut(user.id);
  }

  onMouseOver(id) {
    const checked = $(`#data${id} i`);
    let containerButtons = $(`#data${id} div`);
    let buttons = $(`#data${id} div i`);

    if(!checked.hasClass('selected')) {
      containerButtons
        .removeClass('invisible')
        .addClass('hoverUsername');

      buttons
        .addClass('optionsButtons')
        .removeClass('none');
    }
  }

  onMouseOut(id) {
    $(`#data${id} div`)
      .removeClass('hoverUsername')
      .addClass('invisible');
    $(`#data${id} div i`)
      .removeClass('optionsButtons')
      .addClass('none')
  }

  render() {
    const {data, removeUser, removeUserTasks} = this.props;
    return (
      <article
        id={`data${data.id}`}
        className="username"
        onMouseOver={this.onMouseOver.bind(this, data.id)}
        onMouseOut={this.onMouseOut.bind(this, data.id)}>
        {data.name}
        <span>{data.username}</span>
        {data.numTasks}
        <div className="invisible">
          <i
            style={{color: 'rgb(88, 180, 24)'}}
            className="material-icons none"
            onClick={this.selectItem.bind(this,data.id)}>
            done
          </i>
          <i
            style={{color: 'rgb(22, 144, 213)'}}
            className="material-icons none"
            onClick={this.handleSelectUserToEdit.bind(this,data)}>
            create
          </i>
          <i
            style={{color: '#ED6A5A'}}
            className="material-icons none"
            onClick={() => {removeUserTasks(data.id); removeUser(data.id)}}>
            clear
          </i>
        </div>
      </article>
    )
  }
}

export default UserItem;
