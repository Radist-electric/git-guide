import React, { Component } from 'react';
import { Row } from 'reactstrap';

export default class InteractivePage extends Component {
  // constructor (props) {
  //   super(props);
  // }
  render() {
    return (
      <Row>
        <div className="col-12">
          <h1>Интерактивная навигация по Git</h1>
        </div>
        <div className="col-12">
          <p>На данной странице будет возможность графически работать с ветками и генерировать команды под вашу ситуацию.</p>
        </div>
      </Row>
    );

  }

}

