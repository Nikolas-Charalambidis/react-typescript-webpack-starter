import * as React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import IPage from "./pages/IPage";
import Home from "./pages/Home";

export default class App extends React.Component<IPage> {
  public render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path={"/"}>
              <Home label={"home"} />
            </Route>
            <Route path="/about">
              <About label={"about"} />
            </Route>
            <Route path="/dashboard">
              <Contacts label={"contacts"} />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
