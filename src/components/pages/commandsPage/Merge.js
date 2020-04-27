import React, { Component } from 'react';
import Multiselect from '../../select/Multiselect';

let gitMerge = [
  {
    command: 'git merge [branch]',
    input: [
      'Имя ветки, c которой происходит слияние'
    ],
    description: 'Влить в активную ветку (та, в которой находимся) изменения из ветки [input]'
  },
  {
    command: 'git mergetool',
    input: [],
    description: 'Запустить утилиту для слияния, которая прописана в конфигурации.'
  },
  {
    command: 'git mergetool --tool-help',
    input: [],
    description: 'Покажет инструменты, которые могут быть выбраны в качестве инструмента для слияния. Часть инструментов может быть уже доступна для выбора. Другая часть инструментов в данный момент недоступна, но может быть дополнительно установлена.'
  }
];


export default class Merge extends Component {
  // constructor (props) {
  //   super(props);
  // }
  render() {
    return (
      <>
        <h2>Устранение конфликтов</h2>
        <Multiselect data={gitMerge} />
      </>
    );

  }

}

