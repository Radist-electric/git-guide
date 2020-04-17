import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  // constructor (props) {
  //   super(props);
  // }
  render() {
    return (
        <ul className="nav">
          <li className="nav-item"><Link to='/' className="nav-link text-light">Главная</Link></li>
          <li className="nav-item"><Link to='/commands' className="nav-link text-light">Команды Git</Link></li>
          <li className="nav-item"><Link to='/interactive' className="nav-link text-light">Интерактив</Link></li>
          <li className="nav-item"><Link to='/git' className="nav-link text-light">Про Git</Link></li>
          <li className="nav-item"><Link to='/about' className="nav-link text-light">О проекте</Link></li>
        </ul>
    );

  }

}

