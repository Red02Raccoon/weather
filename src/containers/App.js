import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../services/history";
import routes from "../routes";
import logo from "../images/icons/sun.jpg";
import "./App.css";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <Router history={history}>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          })}
        </Switch>
      </Router>
    );
  }
}

export default App;
