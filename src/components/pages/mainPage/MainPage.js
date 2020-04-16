import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import MainPageTab1 from '../../../img/MainPageTab1.jpg';
import MainPageTab2 from '../../../img/MainPageTab2.jpg';
import MainPageTab3 from '../../../img/MainPageTab3.jpg';


export default class MainPage extends Component {
  // constructor (props) {
  //   super(props);
  // }
  render() {
    return (
      <Row>
        <div className="col-4">
          <div className="card">
            <img className="card-img-top" src={MainPageTab1} alt="Базовые команды" />
            <div className="card-body">
              <h5 className="card-title">Базовые команды</h5>
              <Link to='/basic' className="btn btn-block btn-primary">Перейти</Link>
              <p>Создаём репозиторий, индексируем файлы, делаем коммиты, запушиваем на удалённый репозиторий, делаем пулл к себе.</p>

            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <img className="card-img-top" src={MainPageTab2} alt="Работа с ветками" />
            <div className="card-body">
              <h5 className="card-title">Работа с ветками</h5>
              <Link to='/branches' className="btn btn-block btn-primary">Перейти</Link>
              <p>Создаём ветки, переключаемся между ними, выполняем слияние и устранение конфликтов.</p>

            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <img className="card-img-top" src={MainPageTab3} alt="Дополнительные команды" />
            <div className="card-body">
              <h5 className="card-title">Дополнительные команды</h5>
              <Link to='/others' className="btn btn-block btn-primary">Перейти</Link>
              <p>Многообразие команд Git даёт обширные возможности для работы. Воспользуемся ими.</p>

            </div>
          </div>
        </div>
      </Row>
    );

  }

}

