import React from 'react';
import { Col, Row, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
      <h1>Путеводитель по Git</h1>
      <Row>
        <Col xl="4" md="6" className="mb-4">
          <Card>
            <CardBody>
              <h5 className="card-title">Базовые команды</h5>
              <p>Создаём репозиторий, индексируем файлы, делаем коммиты, запушиваем на удалённый репозиторий, делаем пулл к себе.</p>
              <Link to='/commands/basic' className="btn btn-block btn-primary">Перейти</Link>
            </CardBody>
          </Card>
        </Col>

        <Col xl="4" md="6" className="mb-4">
          <Card>
            <CardBody>
              <h5 className="card-title">Работа с репозиторием</h5>
              <p>Работа с локальным и удалённым репозиторием. Создание, клонирование, анализ и синхронизация репозитория.</p>
              <Link to='/commands/repository' className="btn btn-block btn-primary">Перейти</Link>
            </CardBody>
          </Card>
        </Col>

        <Col xl="4" md="6" className="mb-4">
          <Card>
            <CardBody>
              <h5 className="card-title">Работа с коммитами</h5>
              <p>Создание коммитов и работа с изменениями. Копирование коммитов, переключение между ними и история коммитов.</p>
              <Link to='/commands/commits' className="btn btn-block btn-primary">Перейти</Link>
            </CardBody>
          </Card>
        </Col>

        <Col xl="4" md="6" className="mb-4">
          <Card>
            <CardBody>
              <h5 className="card-title">Работа с ветками</h5>
              <p>Создание и удаление веток, переключение между ними.</p>
              <Link to='/commands/branches' className="btn btn-block btn-primary">Перейти</Link>
            </CardBody>
          </Card>
        </Col>

        <Col xl="4" md="6" className="mb-4">
          <Card>
            <CardBody>
              <h5 className="card-title">Устранение конфликтов</h5>
              <p>Cлияние веток и откат к предыдущему состоянию. Устранение конфликтов слияния.</p>
              <Link to='/commands/merge' className="btn btn-block btn-primary">Перейти</Link>
            </CardBody>
          </Card>
        </Col>

      </Row>
    </>
  )
}
export default MainPage;