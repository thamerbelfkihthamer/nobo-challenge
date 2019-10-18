import React, {Component} from 'react';
import './App.css';
import Films from './components/Films';
import Layout from './components/Layout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Film from './components/Film';
import NoMatch from './components/NoMatch';

export default class App extends Component {

  render() {
    return (
      <div className="App">
         <Router>
            <Layout>
              <Switch>
                <Route exact path="/" component={Films} />
                <Route exact path="/films" component={Films} />
                <Route path="/films/:id" exact component={Film} />
                <Route component={NoMatch} />
              </Switch>
            </Layout>
          </Router>
      </div>
    )
  }
}
