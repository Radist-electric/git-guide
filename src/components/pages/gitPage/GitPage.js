import React from 'react';
import { Col, Row } from 'reactstrap';

const GitPage = () => {
  return (
    <Row>
      <Col xl="12">
        <h1>Что такое Git?</h1>
      </Col>
      <Col xl="12">
        <p>Git - это система контроля версий для программного продукта. Несколько программистов могут работать над одним проектом. Каждый локально выполняет свою задачу, а затем может поделиться своим кодом через эту систему или скачать себе чужой код. В том числе можно выполнить слияние кода, если работа велась над одной и той же частью программы. Создавая периодически точки сохранения, можно в любой момент вернуться к другой версии вашей программы. Хранилищем вашего проекта является репозиторий.</p>
        <p>Для управления Git-репозиториями существуют различные платформы. Например, те, которые на слуху у большинства - это GitHub и GitLab.</p>
        <p>...продолжение следует...</p>
      </Col>
    </Row>
  )
}
export default GitPage;