import React, { Component } from 'react';
import { Row } from 'reactstrap';

export default class Commits extends Component {
  // constructor (props) {
  //   super(props);
  // }
  render() {
    return (
      <Row>
        <div className="col-12">
          <p>Создание коммитов и работа с изменениями. Копирование коммитов, переключение между ними и история коммитов.</p>
        </div>
      </Row>
    );

  }

}

