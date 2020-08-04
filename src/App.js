import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Login from './pages/Login';
import GuardedRoute from './GuardedRoute';
import * as ROUTES from './constants/routes';
import Home from './pages/Home';

class App extends Component {
  constructor(props) {
    super(props);
    localStorage.clear();
  }

  render() {
    return (
      <Router>
        <Route exact path={ROUTES.LOGIN} component={Login}></Route>
        <GuardedRoute path={ROUTES.HOME} component={Home} />
      </Router>
    )
  }
}

export default App;
