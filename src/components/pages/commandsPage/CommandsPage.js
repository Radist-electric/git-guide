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
        <h4>Общая информация о командах Git</h4>
        <p>Команды GIt можно условно разбить на разные категории. Причём одни и те же команды смело можно отнести к разным категориям. Переходите по вкладкам и вы найдёте нужные вам команды. Они могут встречаться в разных категориях.</p>
        <p>Самые простые и ходовые команды можно найти во вкладке <Link to='/commands/basic'>Базовые</Link>. Если хотите освежить в памяти общие понятие Git, то на странице <Link to='/about'>Про Git</Link> вы найдёте нужную вам информацию.</p>
      </div>
    )
    const { location } = this.props;
    const currentPath = location.pathname;

    return (
      <>
        <Row>
          <div className="col-12">
            <h1>Команды GIT</h1>
          </div>
          <div className="col-12">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <Link className={currentPath === '/commands/basic' ? 'active nav-link' : 'nav-link'} to='/commands/basic'>Базовые</Link>
              </li>
              <li className="nav-item">
                <Link className={currentPath === '/commands/repository' ? 'active nav-link' : 'nav-link'} to='/commands/repository'>Репозиторий</Link>
              </li>
              <li className="nav-item">
                <Link className={currentPath === '/commands/commits' ? 'active nav-link' : 'nav-link'} to='/commands/commits'>Коммиты</Link>
              </li>
              <li className="nav-item">
                <Link className={currentPath === '/commands/branches' ? 'active nav-link' : 'nav-link'} to='/commands/branches'>Ветки</Link>
              </li>
              <li className="nav-item">
                <Link className={currentPath === '/commands/merge' ? 'active nav-link' : 'nav-link'} to='/commands/merge'>Слияние</Link>
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
