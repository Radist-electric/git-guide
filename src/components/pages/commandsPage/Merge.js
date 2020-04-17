import React, { Component } from 'react';
import { Row } from 'reactstrap';

export default class Merge extends Component {
  // constructor (props) {
  //   super(props);
  // }
  render() {
    return (
      <Row>
        <div className="col-12">
          <p>Cлияние веток и откат к предыдущему состоянию. Устранение конфликтов слияния.</p>
        </div>
      </Row>
    );

  }

}

