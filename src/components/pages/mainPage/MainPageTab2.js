import React, { Component } from 'react';
import { Row } from 'reactstrap';

export default class MainPageTab2 extends Component {
  // constructor (props) {
  //   super(props);
  // }
  render() {
    return (
      <Row>
        <div className="col-12">
          <h1>Работа с ветками</h1>
          <p>Создаём ветки, переключаемся между ними, выполняем слияние и устранение конфликтов.</p>
        </div>
      </Row>
    );

  }

}

