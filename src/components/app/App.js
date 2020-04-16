import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../header/Header';
import { MainPage, GitPage, AboutPage, OtherPage, MainPageTab1, MainPageTab2, MainPageTab3 } from '../pages';
import Footer from '../footer/Footer';
import '../../sass/style.sass';
// const mainStyle = {
//   minHeight: '100%',
// };
export default class App extends Component {
  // constructor (props) {
  //   super(props);
  // }

  componentDidMount() {
    console.log(this.mainElement);
    console.log(this.headerElement);
    console.log(this.footerElement);
    const headerHeight = this.headerElement.offsetHeight,
          footerHeight = this.footerElement.offsetHeight,
          windowHeight = window.innerHeight
																				|| document.documentElement.clientHeight
																				|| document.body.clientHeight;
    console.log(headerHeight);
    console.log(footerHeight);
    console.log(windowHeight);
    this.mainElement.style.minHeight = windowHeight - headerHeight - footerHeight + "px";
  }


  render() {
    return (
      <Router>
        <Header headerRef={el => (this.headerElement = el)} />
        <main className="main" ref={ (mainElement) => { this.mainElement = mainElement } }>
          <Container>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/basic" component={MainPageTab1} />
              <Route exact path="/branches" component={MainPageTab2} />
              <Route exact path="/others" component={MainPageTab3} />
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

