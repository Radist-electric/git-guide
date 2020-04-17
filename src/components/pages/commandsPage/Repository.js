import React, { Component } from 'react';
import { Row } from 'reactstrap';

export default class Repository extends Component {
  // constructor (props) {
  //   super(props);
  // }
  render() {
    return (
      <Row>
        <div className="col-12">
          <h2>Работа с репозиторием</h2>
        </div>
        <div className="col-12">
          <p>Работа с локальным и удалённым репозиторием. Создание, клонирование, анализ и синхронизация репозитория.</p>
        </div>
      </Row>
    );

  }

}

