import React from "react";
import { withRouter } from "react-router";
import ReactGA from "react-ga";

import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
//import styled from "styled-components";
import Login from "../Login";
import Board from "../Board";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: Boolean(localStorage.getItem("token"))
    };
  }

  initializeReactGA = () => {
    ReactGA.initialize("UA-138231750-1");
    ReactGA.pageview("/homepage");
  };

  onLogin = token => {
    localStorage.setItem("token", token);
    this.setState(state => ({
      isLoggedIn: true
    }));

    this.props.history.push("/");
  };

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/login"
          component={() => (
            <Login
              onLogin={this.onLogin}
              onChange={this.onChange}
              email={this.state.email}
              password={this.state.password}
            />
          )}
        />
        <Route
          path="/"
          component={() =>
            !this.state.isLoggedIn ? (
              <Redirect to="/login" />
            ) : (
              <Board isLoggedIn={this.state.isLoggedIn} />
            )
          }
        />
        {/* <Route path='/:id' render={({match}) => {
                match.params.id
                }} */}
      </Switch>
    );
  }
}

export default withRouter(App);
