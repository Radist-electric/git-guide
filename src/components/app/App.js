import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../header/Header';
import { MainPage, CommandsPage, InteractivePage, GitPage, AboutPage, OtherPage } from '../pages';
import Footer from '../footer/Footer';
import '../../sass/style.sass';

export default class App extends Component {
  // constructor (props) {
  //   super(props);
  // }

  componentDidMount() {
    const headerHeight = this.headerElement.offsetHeight,
      footerHeight = this.footerElement.offsetHeight,
      windowHeight = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
    this.mainElement.style.minHeight = windowHeight - headerHeight - footerHeight + "px";
  }

  render() {

    return (
      <Router>
        <Header headerRef={el => (this.headerElement = el)} />
        <main className="main" ref={(mainElement) => { this.mainElement = mainElement }}>
          <Container>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route path="/commands" component={CommandsPage} />
              <Route exact path="/interactive" component={InteractivePage} />
              <Route exact path="/git" component={GitPage} />
              <Route exact path="/about" component={AboutPage} />
              <Route component={OtherPage} />
            </Switch>
          </Container>
        </main>
        <Footer footerRef={el => (this.footerElement = el)} />
      </Router >
    );
  }
}

