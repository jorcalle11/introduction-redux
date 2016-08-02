import React from 'react';
import $     from 'jquery';

class data extends React.Component {

  selectItem(id) {
    $('.selected').remove();
    $(`#data${id}`).append('<i class="material-icons selected">done</i>');
    this.props.selectedUser.call(null,id);
    this.onMouseOut(id);
  }

  removeUser(id) {
    this.props.removeUser.call(null,id);
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
    const {data} = this.props;
    return (
      <article
        id={`data${data.id}`}
        className="username"
        onMouseOver={this.onMouseOver.bind(this, data.id)}
        onMouseOut={this.onMouseOut.bind(this, data.id)}>
        {data.name}
        <span>{data.username}</span>
        <div className="invisible">
          <i
            style={{color: 'rgb(88, 180, 24)'}}
            className="material-icons none"
            onClick={this.selectItem.bind(this,data.id)}>
            done
          </i>
          <i
            style={{color: '#ED6A5A'}}
            className="material-icons none"
            onClick={this.removeUser.bind(this,data.id)}>
            clear
          </i>
        </div>
      </article>
    )
  }
}

export default data;
