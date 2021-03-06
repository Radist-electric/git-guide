import React, { Component } from 'react';
import { Row } from 'reactstrap';

export default class AboutPage extends Component {
  // constructor (props) {
  //   super(props);
  // }
  render() {
    return (
      <Row>
        <div className="col-12">
          <h1>О проекте Git Guide</h1>
        </div>
        <div className="col-12">
          <p>Основная идея этого Путеводителя по Git - помочь быстро сформировать необходимую команду Git, скопировать в буфер обмена и вставить в командную строку. Это очень удобно для начинающих программистов, пока команды ещё не запомнились. В таких случаях шпаргалка - это очень удобный инструмент.</p>
          <p>Это проект я делаю на React. На данном этапе здесь чистый фронтенд. Через какое-то время планирую подтянуть свои знания по NodeJS и начать делать серверную часть. У меня нет конкретной даты завершения проекта. По мере появления идей буду расширять и дорабатывать Путеводитель.</p>
        </div>
      </Row>
    );

  }

}

