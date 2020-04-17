import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Nav from '../nav/Nav';
import Logo from '../../img/logo.png';

export default class Header extends Component {
  // constructor (props) {
  //   super(props);
  // }
  render() {
    return (
      <header ref={this.props.headerRef}>
        <Container>
            <img className="logo" src={Logo} alt="logo"></img>
          <Nav />
        </Container>
      </header>
    );

  }

}

