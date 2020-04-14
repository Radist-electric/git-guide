import React, { Component } from 'react';
// import { Row } from 'reactstrap';
import Select from '../../select/Select'

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
    descWithoutInput: 'Создаётся „голый“ репозиторий в текущей папке. Этот новый "голый" репозитоий представляет из себя стартовый набор рабочих файлов и папок GIT.',
    descWithInput: 'Создаётся новая папка с именем, которое введено, а внутри этой папки создаётся „голый“ репозиторий. Он представляет из себя стартовый набор рабочих файлов и папок GIT.'
  }
];
let gitStatus = [
  {
    command: 'git status',
    input: false,
    descWithoutInput: 'Показывает текущее состояние репозитория.'
  }
]
let gitAdd = [
  {
    command: 'git add',
    input: true,
    inputPlaceholder: 'Имя файла вместе с расширением, например main.js',
    descWithoutInput: 'Добавляет выбранные файлы в index (индексирование выбранного файла). Подготовка файла для коммита.',
    descWithInput: 'Добавляет конкретный файл, имя которого вы ввели, в index (индексирование выбранного файла). Подготовка файла для коммита.'
  },
  {
    command: 'git add .',
    input: false,
    descWithoutInput: 'Добавляет в индекс изменённые и новые файлы и убирает из индекса удаленные файлы.'
  },
  {
    command: 'git add -A',
    input: false,
    descWithoutInput: 'Добавляет все файлы и папки текущей директории в index (индексирование всех файлов).'
  },
]

export default class MainPage extends Component {
  // constructor (props) {
  //   super(props);
  // }
  render() {
    return (
      <>
        <Select data={gitInit} />
        <Select data={gitStatus} />
        <Select data={gitAdd} />
      </>
    );

  }

}

