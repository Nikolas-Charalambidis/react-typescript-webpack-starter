import * as React from "react";
import IPage from "./IPage";
import { Link } from "react-router-dom";

export default class Contacts extends React.Component<IPage> {
  public render() {
    return (
      <React.Fragment>
        <h1>Page: {this.props.label}</h1>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
