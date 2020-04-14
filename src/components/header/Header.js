import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Nav from '../nav/Nav'

export default class Header extends Component {
  // constructor (props) {
  //   super(props);
  // }
  render() {
    return (
      <header>
        <Container>
            <h1>Путеводитель по Git</h1>
          <Nav />
        </Container>
      </header>
    );

  }

}

