import * as React from "react";

import IPage from "./IPage";

export default class Home extends React.Component<IPage> {
  public render() {
    return (
      <React.Fragment>
        <h1>Welcome, this is a {this.props.label} page</h1>
        <div>
          <div>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contacts">Contacts</a>
              </li>
            </ul>
          </div>
        </div>
        <hr/>
        <div>
            <h3>Environment variable</h3>
            <p>process.env.ENVIRONMENT={process.env.ENVIRONMENT}</p>
            <p>process.env.BASEPATH={process.env.BASEPATH}</p>
            <p>process.env.GREETING={process.env.GREETING}</p>
        </div>
      </React.Fragment>
    );
  }
}
