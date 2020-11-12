import React, { useState, useEffect, useCallback } from 'react'
import { Col, Row, Nav, NavItem } from 'reactstrap'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Basic, Repository, Commits, Branches, Merge, OtherPage } from '../'
import { Loader } from '../../Loader'
import { Error } from '../../Error'

const CommandsPage = (props) => {
  const { location } = props
  const currentPath = location.pathname

  const commands = () => (
    <div>
      <h4>Общая информация о командах Git</h4>
      <p>Команды GIt можно условно разбить на разные категории. Причём одни и те же команды смело можно отнести к разным категориям. Переходите по вкладкам и вы найдёте нужные вам команды. Они могут встречаться в разных категориях.</p>
      <p>Самые простые и ходовые команды можно найти во вкладке <Link to='/commands/basic'>Базовые</Link>. Если хотите освежить в памяти общие понятие Git, то на странице <Link to='/about'>Про Git</Link> вы найдёте нужную вам информацию.</p>
    </div>
  )

  const nav = <Row>
    <Col xl="12">
      <h1>Команды GIT</h1>
    </Col>
    <Col xl="12">
      <Nav tabs>
        <NavItem>
          <Link className={currentPath === '/commands/basic' ? 'active nav-link' : 'nav-link'} to='/commands/basic'>Базовые</Link>
        </NavItem>
        <NavItem>
          <Link className={currentPath === '/commands/repository' ? 'active nav-link' : 'nav-link'} to='/commands/repository'>Репозиторий</Link>
        </NavItem>
        <NavItem>
          <Link className={currentPath === '/commands/commits' ? 'active nav-link' : 'nav-link'} to='/commands/commits'>Коммиты</Link>
        </NavItem>
        <NavItem>
          <Link className={currentPath === '/commands/branches' ? 'active nav-link' : 'nav-link'} to='/commands/branches'>Ветки</Link>
        </NavItem>
        <NavItem>
          <Link className={currentPath === '/commands/merge' ? 'active nav-link' : 'nav-link'} to='/commands/merge'>Слияние</Link>
        </NavItem>
      </Nav>
    </Col>
  </Row>

  const [data, setdata] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const getdata = useCallback(async () => {
    try {
      const preResult = await fetch('http://localhost:3002/commands')
      const result = await preResult.json()
      setdata(result)
      setLoading(false)
    } catch (e) {
      setError(true)
      throw e
    }
  }, [])

  useEffect(() => {
    getdata()
  }, [getdata])

  if (error && loading) {
    return (
      <>
        {nav}
        <Error />
      </>
    )
  }
  if (loading) {
    return (
      <>
        {nav}
        <Loader />
      </>
    )
  }
  if (!loading) {
    return (
      <>
        {nav}
        <Switch>
          <Route exact path="/commands" component={commands} />
          <Route path="/commands/basic" render={props => <Basic data={data} {...props} />} />
          <Route path="/commands/repository" render={props => <Repository data={data} {...props} />} />
          <Route path="/commands/commits" render={props => <Commits data={data} {...props} />} />
          <Route path="/commands/branches" render={props => <Branches data={data} {...props} />} />
          <Route path="/commands/merge" render={props => <Merge data={data} {...props} />} />
          <Route component={OtherPage} />
        </Switch>
      </>
    )
  }
}

export default CommandsPage;


