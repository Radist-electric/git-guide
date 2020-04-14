import React, { Component } from 'react';
// import {Container, Row} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  // constructor (props) {
  //   super(props);
  // }
  render() {
    return (
      // <nav className="nav">
        // <ul className="nav justify-content-start list-unstyled ">
        <ul className="nav">
          {/* <li className="col-auto nav__link"><Link to='/'>Главная</Link></li>
          <li className="col-auto"><Link to='/git'>Про Git</Link></li>
          <li className="col-auto"><Link to='/about'>О проекте</Link></li> */}
          <li className="nav-item"><Link to='/' className="nav-link">Главная</Link></li>
          <li className="nav-item"><Link to='/git' className="nav-link">Про Git</Link></li>
          <li className="nav-item"><Link to='/about' className="nav-link">О проекте</Link></li>
        </ul>
      // </nav>
    );

  }

}

