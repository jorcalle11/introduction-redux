import React            from 'react';
import {browserHistory} from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <section className="containerHome">
        <h2>Primeros pasos con React y Redux</h2>
        <p>Se utilizó para realizar este ejemplo, las siguientes librerias</p>
        <ul className="list-libraries">
          <li>
            React =>
            <a href="https://www.npmjs.com/package/react" target="_blank">
              Documentación
            </a>
          </li>
          <li>
            Redux =>
            <a href="https://www.npmjs.com/package/redux" target="_blank">
              Documentación
            </a>
          </li>
          <li>
            React-Redux =>
            <a href="https://www.npmjs.com/package/react-redux" target="_blank">
              Documentación
            </a>
          </li>
          <li>
            React-Router =>
            <a href="https://www.npmjs.com/package/react-router" target="_blank">
              Documentación
            </a>
          </li>
          <li>
            React-Router-Redux =>
            <a href="https://www.npmjs.com/package/react-router-redux" target="_blank">
              Documentación
            </a>
          </li>
        </ul>
        <p>Puedes seleccionar los siguientes ejemplos</p>
        <div style={{marginBottom:'20px', marginTop:'40px'}}>
          <button className="btn btn-primary btn-lg margin-right" onClick={() => browserHistory.push('/contador')}>Contador</button>
          <button className="btn btn-primary btn-lg" onClick={() => browserHistory.push('/tareas')}>Tareas</button>
        </div>
      </section>
    )
  }
}

export default Home;
