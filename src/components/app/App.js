import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../header/Header';
import {MainPage, GitPage, AboutPage, OtherPage} from '../pages';
import Footer from '../footer/Footer';
import '../../sass/style.sass';

export default class App extends Component {
  // constructor (props) {
  //   super(props);
  // }
  render() {
    return (
      <Router>
        <Header />
        <main className="main">
          <Container>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/git" component={GitPage} />
              <Route exact path="/about" component={AboutPage} />
              <Route component={OtherPage} />
            </Switch>
          </Container>
        </main>
        <Footer />
      </Router >
    );

  }

}

