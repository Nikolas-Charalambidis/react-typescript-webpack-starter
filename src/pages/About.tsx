import * as React from "react";

import IPage from "./IPage";

const About: React.FunctionComponent<IPage> = ({ label }) => {
  return (
    <React.Fragment>
      <h1>Page: {label}</h1>
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default About;
