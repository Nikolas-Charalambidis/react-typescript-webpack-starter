import * as React from "react";

import IPage from "./IPage";
import { Link } from "react-router-dom";

export default class About extends React.Component<IPage> {
  public render() {
    return (
      <React.Fragment>
        <h1>Welcome, this is a {this.props.label} page</h1>
        <div>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
