import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Nav from '../nav/Nav';
import Logo from '../../img/logo.png';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      burger: true,
    }
  }
  menuChange = () => {
    this.setState({
      burger: !this.state.burger
    });

  }

  render() {
    const { burger } = this.state;
    const burgerClass = burger === true ? 'menu-btn menu-btn-burger' : 'menu-btn menu-btn-cross';
    const nav = burger === true ? null : <Nav />;

    return (
      <header className="header" ref={this.props.headerRef}>
        <Container>
          <div className="header__wrap">
            <img className="logo" src={Logo} alt="logo"></img>
            <div className={burgerClass} onClick={this.menuChange}>
              <span></span>
            </div>
          </div>
          {nav}
        </Container>
      </header>
    );

  }

}

