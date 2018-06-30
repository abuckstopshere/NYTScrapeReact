import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Posts from "./components/Posts";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/posts" component={Posts} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
