import React  from 'react';
import {Link} from 'react-router';
import './main.css';

class Header extends React.Component {
  render() {
    return (
      <header className="headerMain">
        <h3>{this.props.name}</h3>
        <ul>
          <li><Link to="/" className="active">Principal</Link></li>
          <li><Link to="/contador">Contador</Link></li>
          <li><Link to="/tareas">Tareas</Link></li>
          <li><Link to="/about">Acerca de Mi</Link></li>
        </ul>
      </header>
    )
  }
}

export default Header;
