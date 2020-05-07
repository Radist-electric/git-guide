import React from 'react';
import { Col, Row } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export default function GitPage() {
  const classes = useStyles();

  return (
    <>
      <Row>
        <Col xl="12">
          <h1>Что такое Git?</h1>
        </Col>
        <Col xl="12">
          <p>Git - это система контроля версий для программного продукта. Несколько программистов могут работать над одним проектом. Каждый локально выполняет свою задачу, а затем может поделиться своим кодом через эту систему или скачать себе чужой код. В том числе можно выполнить слияние кода, если работа велась над одной и той же частью программы. Создавая периодически точки сохранения, можно в любой момент вернуться к другой версии вашей программы. Хранилищем вашего проекта является репозиторий.</p>
          <p>Для управления Git-репозиториями существуют различные платформы. Например, те, которые на слуху у большинства - это GitHub и GitLab.</p>
          <h2>Основные термины</h2>
        </Col>
      </Row>
        <div className={classes.root}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Рабочая папка</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Файловая система проекта (те файлы, с которыми вы работаете).
            </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>Индекс</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Список отслеживаемых git-ом файлов и директорий, промежуточное хранилище изменений (редактирование, удаление отслеживаемых файлов).
            </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
    </>
  )
}
