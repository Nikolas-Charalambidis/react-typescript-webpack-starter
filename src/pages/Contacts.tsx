import * as React from "react";
import IPage from "./IPage";

export default class Contacts extends React.Component<IPage> {
  public render() {
    return (
      <React.Fragment>
        <h1>Page: {this.props.label}</h1>
        <div>
          <ul>
            <li>
                <a href="/">Home</a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
