import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Basic, Repository, Commits, Branches, Merge, OtherPage } from '../';

export default class CommandsPage extends Component {
  // constructor (props) {
  //   super(props);
  // }
  render() {

    const commands = () => (
      <div>
        <h3>Общая информация о командах GIT</h3>
      </div>
    )

    return (
      <>
        <Row>
          <h2>Команды GIT</h2>
          <div className="col-12">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <Link to='/commands/basic' className="nav-link">Базовые</Link>
              </li>
              <li className="nav-item">
                <Link to='/commands/repository' className="nav-link">Репозиторий</Link>
              </li>
              <li className="nav-item">
                <Link to='/commands/commits' className="nav-link">Коммиты</Link>
              </li>
              <li className="nav-item">
                <Link to='/commands/branches' className="nav-link">Ветки</Link>
              </li>
              <li className="nav-item">
                <Link to='/commands/merge' className="nav-link">Слияние</Link>
              </li>
            </ul>
          </div>
        </Row>
        <Switch>
          <Route exact path="/commands" component={commands} />
          <Route exact path="/commands/basic" component={Basic} />
          <Route exact path="/commands/repository" component={Repository} />
          <Route exact path="/commands/commits" component={Commits} />
          <Route exact path="/commands/branches" component={Branches} />
          <Route exact path="/commands/merge" component={Merge} />
          <Route component={OtherPage} />
        </Switch>
      </>
    );

  }

}
