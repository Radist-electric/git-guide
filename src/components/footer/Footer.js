import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

export default class Footer extends Component {
  // constructor (props) {
  //   super(props);
  // }
  render() {
    return (
      <footer>
        <Container>
          <Row>
            <div className="col-4">
              <ul className="list-unstyled">
                <li><h4>2020 &#169; Путеводитель по Git</h4></li>
                <li><p>Генерирует команды Git</p></li>
              </ul>
              
            </div>
          </Row>
        </Container>
      </footer>
    );

  }

}

