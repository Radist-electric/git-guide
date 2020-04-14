import React, { Component } from 'react';
import { Row } from 'reactstrap';

export default class GitPage extends Component {
  // constructor (props) {
  //   super(props);
  // }
  render() {
    return (
      <Row>
        <div className="col-12">
          <p>Git Page</p>
          <p>GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.</p>
          <p>This tutorial teaches you GitHub essentials like repositories, branches, commits, and Pull Requests. You’ll create your own Hello World repository and learn GitHub’s Pull Request workflow, a popular way to create and review code.</p>
        </div>
      </Row>
    );

  }

}

