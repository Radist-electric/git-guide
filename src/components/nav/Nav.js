import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  // constructor (props) {
  //   super(props);
  // }
  render() {
    return (
        <ul className="nav">
          <li className="nav-item"><Link to='/' className="nav-link">Главная</Link></li>
          <li className="nav-item"><Link to='/git' className="nav-link">Про Git</Link></li>
          <li className="nav-item"><Link to='/about' className="nav-link">О проекте</Link></li>
        </ul>
    );

  }

}

