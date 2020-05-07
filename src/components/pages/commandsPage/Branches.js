import React from 'react';
import Multiselect from '../../select/Multiselect';

let gitBranch = [
  {
    command: 'git branch',
    input: [],
    description: 'Показать список веток в локальном репозитории. Текущая ветка будет выделена звёздочкой и цветом.'
  },
  {
    command: 'git branch -v',
    input: [],
    description: 'Показать в локальном репозитории список веток и последний коммит в каждой. Текущая ветка будет выделена звёздочкой и цветом.'
  },
  {
    command: 'git branch -a',
    input: [],
    description: 'Показать список веток в локальном и удалённом репозиториях. Текущая ветка в локальном репозитории будет выделена звёздочкой и цветом.'
  },
  {
    command: 'git branch -r',
    input: [],
    description: 'Показать список веток в удалённом репозитории.'
  },
  {
    command: 'git branch -d [old_branch]',
    input: [
      'Имя удаляемой ветки, например, old_branch'
    ],
    description: 'Удалить ветку [input]. Если эта ветка ещё не была слита с текущей веткой, то git предупредит об этом. Необходимо выполнить слияние с помощью git merge или выполнить с помощью команды git branch -D принудительное удаление без слияния с текущей веткой.'
  },
  {
    command: 'git branch -D [old_branch]',
    input: [
      'Имя удаляемой ветки, например, old_branch'
    ],
    description: 'Принудительно удалить ветку [input], даже если эта ветка ещё не была слита с текущей веткой.'
  },
  {
    command: 'git branch [new_branch]',
    input: [
      'Имя новой ветки, например, new_branch'
    ],
    description: 'Создать на текущем коммите новую ветку с указанным именем [input].'
  },
  {
    command: 'git branch [new_branch] [16fce82]',
    input: [
      'Имя новой ветки, например, new_branch',
      'Номер коммита, например, 16fce82'
    ],
    description: 'Создать новую ветку с указанным именем [input] на указанном коммите [input].'
  }
];
let gitCheckout = [
  {
    command: 'git checkout',
    input: [
      'Имя ветки'
    ],
    description: 'Перейти на указанную ветку [input]. Перед этим в текущей ветке необходимо сделать коммит, иначе смена ветки невозможна. После выполнения команды указатель перемещается на коммит выбранной новой ветки, а рабочая директория возвращается к состоянию на момент этого коммита.'
  },
  {
    command: 'git checkout -b',
    input: [
      'Имя ветки'
    ],
    description: 'Создать новую ветку с указанным именем [input] и перейти в неё. Перед этим в текущей ветке необходимо сделать коммит, иначе смена ветки невозможна.'
  }
];


const Branches = () => {
  return (
    <>
      <h2>Работа с ветками</h2>
      <Multiselect data={gitBranch} />
      <Multiselect data={gitCheckout} />
    </>
  )
}

export default Branches;
