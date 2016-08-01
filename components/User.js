import React from 'react';
import $     from 'jquery';

class data extends React.Component {

  selectdata(id,e) {
    $('article i').remove();
    $(`#data${id}`).append('<i class="material-icons selected">done</i>');
    this.props.selectedUser.call(null,id);
  }

  render() {
    const {data} = this.props;
    return (
      <article
        id={`data${data.id}`}
        className="username"
        onClick={this.selectdata.bind(this,data.id)}>
        {data.name.first} {data.name.last}
        <span>{data.username}</span>
      </article>
    )
  }
}

export default data;
