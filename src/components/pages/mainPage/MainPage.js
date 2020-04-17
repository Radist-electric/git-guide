import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class MainPage extends Component {
  // constructor (props) {
  //   super(props);
  // }
  render() {
    return (
      <Row>

        <div className="col-4 mb-4">
          <div className="card">
            {/* <img className="card-img-top" src={CommandsPageTab1} alt="Базовые команды" /> */}
            <div className="card-body">
              <h5 className="card-title">Базовые команды</h5>
              <p>Базовый набор команд, чтобы начать работать. Создаём репозиторий, индексируем файлы, делаем коммиты, запушиваем на удалённый репозиторий, делаем пулл к себе.</p>
              <Link to='/commands/basic' className="btn btn-block btn-primary">Перейти</Link>
            </div>
          </div>
        </div>

        <div className="col-4 mb-4">
          <div className="card">
            {/* <img className="card-img-top" src={CommandsPageTab1} alt="Базовые команды" /> */}
            <div className="card-body">
              <h5 className="card-title">Работа с репозиторием</h5>
              <p>Работа с локальным и удалённым репозиторием. Создание, клонирование, анализ и синхронизация репозитория.</p>
              <Link to='/commands/repository' className="btn btn-block btn-primary">Перейти</Link>
            </div>
          </div>
        </div>

        <div className="col-4 mb-4">
          <div className="card">
            {/* <img className="card-img-top" src={CommandsPageTab1} alt="Базовые команды" /> */}
            <div className="card-body">
              <h5 className="card-title">Работа с коммитами</h5>
              <p>Создание коммитов и работа с изменениями. Копирование коммитов, переключение между ними и история коммитов.</p>
              <Link to='/commands/commits' className="btn btn-block btn-primary">Перейти</Link>
            </div>
          </div>
        </div>

        <div className="col-4 mb-4">
          <div className="card">
            {/* <img className="card-img-top" src={CommandsPageTab2} alt="Работа с ветками" /> */}
            <div className="card-body">
              <h5 className="card-title">Работа с ветками</h5>
              <p>Создание и удаление веток, переключение между ними.</p>
              <Link to='/commands/branches' className="btn btn-block btn-primary">Перейти</Link>
            </div>
          </div>
        </div>


        <div className="col-4 mb-4">
          <div className="card">
            {/* <img className="card-img-top" src={CommandsPageTab3} alt="Дополнительные команды" /> */}
            <div className="card-body">
              <h5 className="card-title">Устранение конфликтов</h5>
              <p>Cлияние веток и откат к предыдущему состоянию. Устранение конфликтов слияния.</p>
              <Link to='/commands/merge' className="btn btn-block btn-primary">Перейти</Link>
            </div>
          </div>
        </div>

      </Row>
    );

  }

}

