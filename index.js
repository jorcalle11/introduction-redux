import React      from 'react';
import ReactDOM   from 'react-dom';
import $          from 'jquery';
import Routes     from './routes';

const mount = document.getElementById('app');

ReactDOM.render(
  Routes,
  mount
)

$(document).ready(navigation);

function navigation() {
  $('.headerMain a').on('click',handleClick);
}

function handleClick() {
  $('.active').removeClass('active');
  $(this).addClass('active');
}
