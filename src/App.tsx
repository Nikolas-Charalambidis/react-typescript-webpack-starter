import * as React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import IPage from "./pages/IPage";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

export default class App extends React.Component<IPage> {
  public render() {
    return (

        <Router basename={process.env.BASENAME}>
          <Switch>
            <Route exact path="/">
              <Home label={"home"} />
            </Route>
            <Route exact path="/about">
              <About label={"about"} />
            </Route>
            <Route exact path="/dashboard">
              <Contacts label={"contacts"} />
            </Route>
            <Route>
              <ErrorPage label={"404"} />
            </Route>
          </Switch>
        </Router>
    );
  }
}
