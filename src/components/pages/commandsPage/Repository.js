import React, { Component } from 'react';
// import { Row } from 'reactstrap';
import Select from '../../select/Select';
import Multiselect from '../../select/Multiselect';

let gitInit = [
  {
    command: 'git init',
    input: true,
    inputPlaceholder: 'Имя папки, если требуется',
    descWithoutInput: 'Инициализация пустого Git-репозитория в текущей папке. Создаётся скрытая папка .git со стартовым набором рабочих файлов и папок.',
    descWithInput: 'В текущей папке создаётся новая папка с тем именем, которое введено. В ней происходит инициализация пустого Git-репозитория, т.е. создаётся скрытая папка .git со стартовым набором рабочих файлов и папок.'
  },
  {
    command: 'git init --bare',
    input: true,
    inputPlaceholder: 'Имя репозитория, если требуется',
    descWithoutInput: 'Создаётся „голый“ репозиторий в текущей папке. Этот новый "голый" репозитоий представляет из себя стартовый набор рабочих файлов и папок Git.',
    descWithInput: 'Создаётся новая папка с именем, которое введено, а внутри этой папки создаётся „голый“ репозиторий. Он представляет из себя стартовый набор рабочих файлов и папок Git.'
  }
];
let gitRemote = [
  {
    command: 'git remote',
    input: [],
    description: 'Посмотреть список доступных удалённых репозиториев.'
  },
  {
    command: 'git remote -v',
    input: [],
    description: 'Посмотреть детальный список доступных удалённых репозиториев.'
  },
  {
    command: 'git remote add',
    input: [
      'Имя репозитория',
      'URL репозитория'
    ],
    description: 'Добавляем удалённый пустой репозиторий, который был предварительно создан. Будем обращаться к нему по имени [input], которое Вы ввели. Располагается удалённый репозиторий по адресу [input], который Вы ввели.'
  }
]

export default class Repository extends Component {
  // constructor (props) {
  //   super(props);
  // }
  render() {
    return (
      <>
        <h2>Базовые команды</h2>
        <Select data={gitInit} />
        <Multiselect data={gitRemote} />
      </>
    );
  }
}

